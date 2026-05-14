"""
Authentication-related views: Register, Login, Profile management
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from ..models import User
from rest_framework.permissions import AllowAny
from ..models import Profile
from ..serializers import RegisterSerializer, ProfileSerializer


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
