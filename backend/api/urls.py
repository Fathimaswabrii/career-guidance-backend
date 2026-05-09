from django.urls import path
from .views.auth_views import RegisterView, LoginView, ProfileView
from .views.test_views import QuestionView, PredictCareer, SubmitTestView, ResultView
from .views.recommendation_views import StreamRecommendation, CourseRecommendation, SkillRecommendationView, AnalyticsView

urlpatterns = [
    # Authentication URLs
    path('register/', RegisterView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('login/', LoginView.as_view()),
    
    # Test URLs
    path('questions/', QuestionView.as_view()),
    path('predict/', PredictCareer.as_view()),
    path('submit-test/', SubmitTestView.as_view()),
    path('results/', ResultView.as_view()),
    
    # Recommendation URLs
    path('stream/', StreamRecommendation.as_view()),
    path('courses/', CourseRecommendation.as_view()),
    path('skill-recommend/', SkillRecommendationView.as_view()),
    path('analytics/', AnalyticsView.as_view()),
]