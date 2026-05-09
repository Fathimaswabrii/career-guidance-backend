from django.urls import path
from .views_chatbot import ChatbotView

urlpatterns = [
    path('message/', ChatbotView.as_view(), name='chatbot-message'),
]
