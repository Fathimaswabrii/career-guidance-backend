from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .chatbot_service import generate_ai_response

class ChatbotView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        message = request.data.get("message", "")

        if not message:
            return Response({"error": "Message is required"}, status=400)

        reply = generate_ai_response(request.user, message)

        return Response({"reply": reply})