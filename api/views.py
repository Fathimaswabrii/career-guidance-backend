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
import joblib
from collections import defaultdict
from .models import Career, Profile, Question, Result, Stream
from .serializers import RegisterSerializer, ProfileSerializer, QuestionSerializer

import joblib

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


# 🤖 ML Prediction

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

model_path = os.path.join(BASE_DIR, 'ml', 'career_model.pkl')

model = joblib.load(model_path)

class PredictCareer(APIView):
    def post(self, request):
        data = request.data

        features = [[
            data['linguistic'],
            data['musical'],
            data['bodily'],
            data['logical'],
            data['spatial'],
            data['interpersonal'],
            data['intrapersonal'],
            data['naturalist']
        ]]

        prediction = model.predict(features)
        prob = model.predict_proba(features)

        return Response({
            "career": prediction[0],
            "match": round(max(prob[0]) * 100, 2)
        })
# Create your views here.

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

        for cat in all_categories:
            category_scores[cat] = 0

        for ans in answers:
            q = Question.objects.filter(id=ans.get('question_id')).first()
            if q:
                category_scores[q.category] += ans.get('score', 0)

        features = [[
            category_scores['linguistic'],
            category_scores['musical'],
            category_scores['bodily'],
            category_scores['logical'],
            category_scores['spatial'],
            category_scores['interpersonal'],
            category_scores['intrapersonal'],
            category_scores['naturalist']
        ]]

        prediction = model.predict(features)
        probs = model.predict_proba(features)

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
            predicted_career=prediction[0],
            match_percentage=float(max(probs[0]) * 100)
        )

        return Response({
            "career": prediction[0],
            "match": float(max(probs[0]) * 100)
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
        data = request.data

        streams = Stream.objects.all()
        matched = []

        for stream in streams:
            if (
                data.get('logical', 0) >= stream.min_logical and
                data.get('linguistic', 0) >= stream.min_linguistic and
                data.get('spatial', 0) >= stream.min_spatial and
                data.get('interpersonal', 0) >= stream.min_interpersonal and
                data.get('intrapersonal', 0) >= stream.min_intrapersonal and
                data.get('naturalist', 0) >= stream.min_naturalist and
                data.get('bodily', 0) >= stream.min_bodily and
                data.get('musical', 0) >= stream.min_musical
            ):
                matched.append({
                    "stream": stream.name,
                    "careers": [c.name for c in stream.careers.all()]
                })
            if not matched:
              return Response({"message": "No suitable stream found"})


        return Response({"results": matched})
    
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
    
    