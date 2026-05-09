from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import google.generativeai as genai

class ChatbotView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '').strip()
        
        if not user_message:
            return Response({'reply': 'Please provide a message.'}, status=400)
        
        try:
            # Initialize Gemini API
            genai.configure(api_key=settings.GEMINI_API_KEY)
            model = genai.GenerativeModel('gemini-2.5-flash')
            
            # System prompt
            system_prompt = """You are CareerBot, a helpful AI career guidance assistant for Indian students. You only answer questions related to: career choices, stream selection (Science/Commerce/Arts after 10th), course recommendations, entrance exams (JEE, NEET, CUET, CLAT, CA Foundation), college selection, and study roadmaps. If a student asks anything outside these topics, politely say you can only help with career and education guidance. Keep answers short, friendly, and encouraging. Use simple English that a school student can understand.

           IMPORTANT FORMATTING INSTRUCTIONS:
           - Use **double asterisks** for important words and headings (e.g., **Science Stream**, **JEE Preparation**, **Key Points**)
           - Use bullet points with • for lists
           - Use short paragraphs (2-3 sentences max)
           - Bold key terms, exam names, career titles, and important concepts
           - Structure answers with clear headings when appropriate
           - Make the response scannable and easy to read

           Example format:
           **Science Stream** • Best for students who like Physics, Chemistry, and Math

           **Key Subjects:**
            • Physics
            • Chemistry  
            • Mathematics
            • Biology/Computer Science

          **Career Options:**
            • Engineering
            • Medicine
            • Research"""
            
            # Generate response
            full_prompt = f"{system_prompt}\n\nStudent: {user_message}\nCareerBot:"
            response = model.generate_content(full_prompt)
            
            if response.text:
                bot_reply = response.text.strip()
                return Response({'reply': bot_reply})
            else:
                return Response({'reply': 'Sorry, I am having trouble connecting. Please try again.'})
                
        except Exception as e:
            print(f"Gemini API Error: {e}")
            return Response({'reply': 'Sorry, I am having trouble connecting. Please try again.'})
