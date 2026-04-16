from django.urls import path
from .views import AnalyticsView, CourseRecommendation, RegisterView, ProfileView, QuestionView, PredictCareer,LoginView, ResultView, SkillRecommendationView, StreamRecommendation, SubmitTestView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('login/', LoginView.as_view()),
    path('questions/', QuestionView.as_view()),
    path('predict/', PredictCareer.as_view()),
    path('submit-test/', SubmitTestView.as_view()),
    path('results/', ResultView.as_view()),
    path('stream/', StreamRecommendation.as_view()),
    path('courses/', CourseRecommendation.as_view()),
    path('skill-recommend/', SkillRecommendationView.as_view()),
    path('analytics/', AnalyticsView.as_view()),
]