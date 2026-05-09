# from api.models import Result
# from .gemini_client import get_gemini_model

# def generate_ai_response(user, message):
#     model = get_gemini_model()

#     result = Result.objects.filter(user=user).order_by('-id').first()

#     if result:
#         context = f"""
#         Career: {result.predicted_career}
#         Match: {result.match_percentage}%

#         Scores:
#         Linguistic: {result.linguistic}
#         Logical: {result.logical}
#         Spatial: {result.spatial}
#         Interpersonal: {result.interpersonal}
#         Intrapersonal: {result.intrapersonal}
#         Naturalist: {result.naturalist}
#         Bodily: {result.bodily}
#         Musical: {result.musical}
#         """
#     else:
#         context = "User has not taken test yet."

#     prompt = f"""
#     You are CareerMate AI, a career guidance assistant.

#     Rules:
#     - Be simple
#     - Be helpful
#     - Suggest careers, courses, and skills

#     User data:
#     {context}

#     Question:
#     {message}
#     """

#     response = model.generate_content(prompt)

#     return response.text
# from api.models import Result
# from .gemini_client import get_gemini_model


# # ✅ STEP 1: Strict prompt builder
# def build_prompt(user_message, context):
#     return f"""
# You are CareerMate AI, a professional career guidance chatbot.

# 🎯 STRICT RULES:
# - Max 5 lines only
# - Use bullet points (•)
# - No paragraphs
# - No long text
# - Be direct and practical
# - Suggest career / skills / courses
# - Use simple English
# - No extra explanation

# 📊 USER DATA:
# {context}

# 💬 QUESTION:
# {user_message}

# ✅ FORMAT:
# • Point 1  
# • Point 2  
# • Point 3  
# """


# # ✅ STEP 2: Main AI response function
# def generate_ai_response(user, message):
#     model = get_gemini_model()

#     result = Result.objects.filter(user=user).order_by('-id').first()

#     # ✅ Build context properly
#     if result:
#         context = f"""
# Career: {result.predicted_career}
# Match: {round(result.match_percentage, 2)}%

# Scores:
# Linguistic: {result.linguistic}
# Logical: {result.logical}
# Spatial: {result.spatial}
# Interpersonal: {result.interpersonal}
# Intrapersonal: {result.intrapersonal}
# Naturalist: {result.naturalist}
# Bodily: {result.bodily}
# Musical: {result.musical}
# """
#     else:
#         context = "No test data. Ask user to take aptitude test."

#     # ✅ USE the prompt builder (IMPORTANT FIX)
#     prompt = build_prompt(message, context)

#     # ✅ Control output (VERY IMPORTANT)
#     response = model.generate_content(
#         prompt,
#         generation_config={
#             "temperature": 0.4,       # less randomness
#             "max_output_tokens": 150  # short answers
#         }
#     )

#     # ✅ Safety fallback
#     reply = response.text.strip() if response.text else "• Try asking again"

#     return reply



from api.models import Result
from .gemini_client import get_client


# ✅ Prompt builder (same, just cleaned)
def build_prompt(user_message, context):
    return f"""
You are CareerMate AI, a professional career guidance chatbot.

RULES:
- Max 5 bullet points
- No paragraphs
- Simple English
- Direct suggestions only

USER DATA:
{context}

QUESTION:
{user_message}

FORMAT:
• Point 1
• Point 2
• Point 3
"""


# ✅ Main AI function (UPDATED FOR google-genai)
def generate_ai_response(user, message):
    client = get_client()

    result = Result.objects.filter(user=user).order_by('-id').first()

    if result:
        context = f"""
Career: {result.predicted_career}
Match: {round(result.match_percentage, 2)}%

Scores:
Linguistic: {result.linguistic}
Logical: {result.logical}
Spatial: {result.spatial}
Interpersonal: {result.interpersonal}
Intrapersonal: {result.intrapersonal}
Naturalist: {result.naturalist}
Bodily: {result.bodily}
Musical: {result.musical}
"""
    else:
        context = "No test data. Ask user to take aptitude test."

    prompt = build_prompt(message, context)

    try:
        response = client.models.generate_content(
            model="gemini-2.5-pro",
            contents=prompt,
            config={
                "temperature": 0.4,
                "max_output_tokens": 150,
            }
        )

        reply = response.text.strip() if response.text else "• Try asking again"

    except Exception as e:
        print("AI Error:", e)
        reply = "• AI error. Try again later"

    return reply