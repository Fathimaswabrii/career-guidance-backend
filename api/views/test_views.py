"""
Test-related views: Questions, Submit Test, Results
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from collections import defaultdict
import os
import numpy as np
import joblib
from ..models import Career, Profile, Question, Result, Stream
from ..serializers import QuestionSerializer

# Import shared functions
from .utils import clean_and_match_career, create_hybrid_features

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

model_path = os.path.join(BASE_DIR, 'ml', 'career_model.pkl')
model = joblib.load(model_path)

scaler_path = os.path.join(BASE_DIR, 'ml', 'scaler.pkl')
scaler = joblib.load(scaler_path)


class QuestionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)


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
