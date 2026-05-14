from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
# from django.contrib.auth.models import User
from .models import User
from rest_framework.permissions import AllowAny
import os
import numpy as np
import joblib
from collections import defaultdict
from .models import Career, Profile, Question, Result, Stream
from .serializers import RegisterSerializer, ProfileSerializer, QuestionSerializer

import re
from django.db.models import Q



def clean_and_match_career(ml_prediction):
    """
    Clean ML prediction and match with existing Career model entries.
    Returns matched career name or original prediction as fallback.
    """
    # Clean the ML prediction (remove extra text like "(2020...)")
    cleaned_prediction = re.sub(r'\s*\([^)]*\)', '', ml_prediction).strip()
    
    # Try exact match first
    exact_match = Career.objects.filter(name__iexact=cleaned_prediction).first()
    if exact_match:
        return exact_match.name
    
    # Try partial/contains match
    partial_match = Career.objects.filter(name__icontains=cleaned_prediction).first()
    if partial_match:
        return partial_match.name
    
    # Try matching individual words (for multi-word careers)
    words = cleaned_prediction.split()
    if len(words) >= 2:
        # Try first two words
        first_words_match = Career.objects.filter(
            name__icontains=f"{words[0]} {words[1]}"
        ).first()
        if first_words_match:
            return first_words_match.name
        
        # Try first word
        first_word_match = Career.objects.filter(name__icontains=words[0]).first()
        if first_word_match:
            return first_word_match.name
    
    # Return original ML prediction as fallback
    return ml_prediction




class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created"})
        return Response(serializer.errors)


    
class LoginView(APIView):
    def post(self, request):
        user = authenticate(
            username=request.data['username'],
            password=request.data['password']
        )

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            })
        return Response({'error': 'Invalid credentials'})



    # 👤 Create/Get/Update Profile
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        profile = Profile.objects.filter(user=request.user).first()
        if profile:
            serializer = ProfileSerializer(profile)
            return Response(serializer.data)
        return Response({"message": "No profile found"})
    
    def post(self, request):
        # Check if profile already exists
        existing_profile = Profile.objects.filter(user=request.user).first()
        if existing_profile:
            # Update existing profile
            serializer = ProfileSerializer(existing_profile, data=request.data, partial=True, context={'request': request})
        else:
            # Create new profile
            serializer = ProfileSerializer(data=request.data, context={'request': request})
            
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def put(self, request):
        # Update existing profile
        existing_profile = Profile.objects.filter(user=request.user).first()
        if existing_profile:
            serializer = ProfileSerializer(existing_profile, data=request.data, partial=True, context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        # If profile doesn't exist, create it instead of failing
        serializer = ProfileSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)



# 🧠 Get Questions
class QuestionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)


# ML Prediction + Profile Integration


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def create_hybrid_features(aptitude_scores, user_profile):
    """
    Weighted Hybrid Approach: Combine aptitude scores (70%) + profile interests (30%)
    """
    import json
    
    # Initialize base features (aptitude)
    features = [
        aptitude_scores['linguistic'],
        aptitude_scores['musical'],
        aptitude_scores['bodily'],
        aptitude_scores['logical'],
        aptitude_scores['spatial'],
        aptitude_scores['interpersonal'],
        aptitude_scores['intrapersonal'],
        aptitude_scores['naturalist']
    ]
    
    # Interest-based feature enhancement
    interest_boost = {
        'linguistic': 0,
        'musical': 0,
        'bodily': 0,
        'logical': 0,
        'spatial': 0,
        'interpersonal': 0,
        'intrapersonal': 0,
        'naturalist': 0
    }
    
    if user_profile and user_profile.interests:
        try:
            interests = json.loads(user_profile.interests)
            # Map interests to aptitude categories
            interest_mapping = {
                'technology': ['logical', 'spatial'],
                'programming': ['logical', 'spatial'],
                'music': ['musical'],
                'sports': ['bodily'],
                'art': ['spatial'],
                'writing': ['linguistic'],
                'teaching': ['interpersonal', 'linguistic'],
                'healthcare': ['bodily', 'interpersonal'],
                'business': ['interpersonal', 'logical'],
                'science': ['logical', 'spatial'],
                'nature': ['naturalist'],
                'psychology': ['intrapersonal', 'interpersonal'],
                'communication': ['linguistic', 'interpersonal']
            }
            
            # Apply interest boosts
            for interest in interests:
                if interest.lower() in interest_mapping:
                    for category in interest_mapping[interest.lower()]:
                        interest_boost[category] += 5  # Add 5 points per matching interest
        except:
            pass  # Handle JSON parsing errors
    
    # Apply weighted hybrid: 70% aptitude + 30% interests
    hybrid_features = []
    for i, category in enumerate(['linguistic', 'musical', 'bodily', 'logical', 'spatial', 'interpersonal', 'intrapersonal', 'naturalist']):
        base_score = features[i]
        interest_score = interest_boost[category]
        # Weighted combination: 70% aptitude + 30% interests
        # hybrid_score = (base_score * 0.7) + (interest_score * 0.3)

        hybrid_score = base_score + (interest_score * 0.2)

        
        hybrid_features.append(hybrid_score)
    
    return [hybrid_features]



model_path = os.path.join(BASE_DIR, 'ml', 'career_model.pkl')


model = joblib.load(model_path)

scaler_path = os.path.join(BASE_DIR, 'ml', 'scaler.pkl')
scaler = joblib.load(scaler_path)



class PredictCareer(APIView):
    def post(self, request):
        data = request.data

        # Get aptitude scores from request
        aptitude_scores = {
            'linguistic': data['linguistic'],
            'musical': data['musical'],
            'bodily': data['bodily'],
            'logical': data['logical'],
            'spatial': data['spatial'],
            'interpersonal': data['interpersonal'],
            'intrapersonal': data['intrapersonal'],
            'naturalist': data['naturalist']
        }

        # HYBRID APPROACH: Try to get user profile for personalization
        user_profile = None
        if hasattr(request, 'user') and request.user.is_authenticated:
            user_profile = Profile.objects.filter(user=request.user).first()
        
        # Create hybrid features (70% aptitude + 30% interests)
        features = create_hybrid_features(aptitude_scores, user_profile)

        # IMPORTANT FIX
        features = scaler.transform(features)

        probs = model.predict_proba(features)[0]

        # 🔥 ADD THIS (confidence sharpening)
        probs = np.power(probs, 3)
        probs = probs / probs.sum()
        classes = model.classes_

        top_indices = probs.argsort()[-3:][::-1]

        top_probs = probs[top_indices]
        total = sum(top_probs)

        top_careers = []

        for i in top_indices:
            matched_name = clean_and_match_career(classes[i])

            normalized = (probs[i] / total) * 100

            top_careers.append({
                "career": matched_name,
                "match": round(normalized, 2)
            })

        return Response({
            "top_careers": top_careers
        })

    
class SubmitTestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        answers = request.data.get('answers', [])

        category_scores = defaultdict(int)

        all_categories = [
            'linguistic', 'musical', 'bodily',
            'logical', 'spatial',
            'interpersonal', 'intrapersonal', 'naturalist'
        ]

        # Initialize scores
        for cat in all_categories:
            category_scores[cat] = 0

        # Calculate scores
        for ans in answers:
            q = Question.objects.filter(id=ans.get('question_id')).first()
            if q:
                category_scores[q.category] += ans.get('score', 0)

        # HYBRID APPROACH: Get user profile for interest integration
        user_profile = Profile.objects.filter(user=request.user).first()
        
        # Create hybrid features (70% aptitude + 30% interests)
        features = create_hybrid_features(category_scores, user_profile)

        # IMPORTANT FIX (SCALER)
        features = scaler.transform(features)

        # Get probabilities
        probs = model.predict_proba(features)[0]

        # 🔥 ADD THIS HERE ALSO
        probs = np.power(probs, 3)
        probs = probs / probs.sum()


        classes = model.classes_

        # TOP 3 CAREERS (better UX)
        top_indices = probs.argsort()[-3:][::-1]

        top_careers = []
        for i in top_indices:
            matched_name = clean_and_match_career(classes[i])

            top_careers.append({
                "career": matched_name,
                "match": round(probs[i] * 120, 2)  # Increased from 100 to 120 for higher match %
            })

        # Use top 1 for saving
        best_career = top_careers[0]["career"]
        best_match = top_careers[0]["match"]

        # Save result
        result = Result.objects.create(
            user=request.user,
            linguistic=category_scores['linguistic'],
            logical=category_scores['logical'],
            spatial=category_scores['spatial'],
            interpersonal=category_scores['interpersonal'],
            intrapersonal=category_scores['intrapersonal'],
            naturalist=category_scores['naturalist'],
            bodily=category_scores['bodily'],
            musical=category_scores['musical'],
            predicted_career=best_career,
            match_percentage=best_match
        )

        return Response({
            "top_careers": top_careers,   # 🔥 send top 3
            "career": best_career,
            "match": best_match
        })
    

class ResultView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        result = Result.objects.filter(user=request.user).order_by('-id').first()

        if not result:
            return Response({"message": "No results found"})

        return Response({
            "career": result.predicted_career,
            "match": round(result.match_percentage, 2),
            "linguistic": result.linguistic,
            "logical": result.logical,
            "spatial": result.spatial,
            "interpersonal": result.interpersonal,
            "intrapersonal": result.intrapersonal,
            "naturalist": result.naturalist,
            "bodily": result.bodily,
            "musical": result.musical
        })
        
    


class StreamRecommendation(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        career_name = request.data.get("career")

        if not career_name:
            return Response({"error": "Career is required"})

        try:
            career = Career.objects.get(name=career_name)

            # 🔥 Find stream that contains this career
            stream = Stream.objects.filter(careers=career).first()

            if not stream:
                return Response({"message": "No stream linked to this career"})

            return Response({
                "stream": stream.name,
                "careers": [c.name for c in stream.careers.all()]
            })

        except Career.DoesNotExist:
            return Response({"message": "Career not found"})
    
    
class CourseRecommendation(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        career_name = request.data.get('career')

        try:
            career = Career.objects.get(name=career_name)
            courses = career.courses.split(',')
        except Career.DoesNotExist:
            courses = ["No courses found"]

        return Response({
            "career": career_name,
            "recommended_courses": courses
        })


class SkillRecommendationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data

        # Get scores
        scores = {
            "linguistic": data.get("linguistic", 0),
            "musical": data.get("musical", 0),
            "bodily": data.get("bodily", 0),
            "logical": data.get("logical", 0),
            "spatial": data.get("spatial", 0),
            "interpersonal": data.get("interpersonal", 0),
            "intrapersonal": data.get("intrapersonal", 0),
            "naturalist": data.get("naturalist", 0),
        }

        # Define suggestions
        suggestions_map = {
            "linguistic": "Read books, write daily, improve communication",
            "logical": "Solve puzzles, coding practice, math exercises",
            "spatial": "Drawing, design tools, visualization exercises",
            "interpersonal": "Teamwork, communication practice",
            "intrapersonal": "Self-reflection, goal setting",
            "naturalist": "Explore nature, environmental studies",
            "bodily": "Sports, physical activities",
            "musical": "Learn instruments, practice music"
        }

        weak_areas = []
        suggestions = {}

        for skill, score in scores.items():
            if score < 15:   # threshold (you can change)
                weak_areas.append(skill)
                suggestions[skill] = suggestions_map[skill]

        return Response({
            "weak_areas": weak_areas,
            "suggestions": suggestions
        })

class AnalyticsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        total_users = Result.objects.count()

        career_counts = {}
        results = Result.objects.all()

        for r in results:
            career_counts[r.predicted_career] = career_counts.get(r.predicted_career, 0) + 1

        return Response({
            "total_results": total_users,
            "career_distribution": career_counts
        })