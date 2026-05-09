# import google.generativeai as genai
# from django.conf import settings

# genai.configure(api_key=settings.GEMINI_API_KEY)

# # def get_gemini_model():
# #     return genai.GenerativeModel("gemini-2.5-pro") 
# #  # change to 2.5 later
# def get_gemini_model():
#     try:
#         return genai.GenerativeModel("models/gemini-2.5-pro")
#     except:
#         return genai.GenerativeModel("models/gemini-1.5-pro")

from google import genai
from django.conf import settings

def get_client():
    api_key = settings.GEMINI_API_KEY
    if not api_key:
        raise ValueError("GEMINI_API_KEY is not set in environment variables")
    return genai.Client(api_key=api_key)