from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Question, Result,User
import json


# 🔐 Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


# 👤 Profile Serializer
class ProfileSerializer(serializers.ModelSerializer):
    # Handle JSON deserialization for arrays
    interests = serializers.JSONField(default=list, required=False)
    skills = serializers.JSONField(default=list, required=False)
    
    class Meta:
        model = Profile
        fields = '__all__'
        read_only_fields = ['user']  # User is auto-set, not user input

    def to_representation(self, instance):
        # Convert JSON strings to Python objects when returning data
        ret = super().to_representation(instance)
        try:
            ret['interests'] = json.loads(instance.interests) if isinstance(instance.interests, str) else instance.interests
        except (json.JSONDecodeError, TypeError):
            ret['interests'] = []
        try:
            ret['skills'] = json.loads(instance.skills) if isinstance(instance.skills, str) else instance.skills
        except (json.JSONDecodeError, TypeError):
            ret['skills'] = []
        return ret

    def create(self, validated_data):
        # Convert arrays to JSON strings before saving
        validated_data['user'] = self.context['request'].user
        validated_data['interests'] = json.dumps(validated_data.get('interests', []))
        validated_data['skills'] = json.dumps(validated_data.get('skills', []))
        return super().create(validated_data)

    def update(self, instance, validated_data):
        # Ensure user can't be changed
        validated_data.pop('user', None)
        # Convert arrays to JSON strings before saving
        if 'interests' in validated_data:
            validated_data['interests'] = json.dumps(validated_data['interests'])
        if 'skills' in validated_data:
            validated_data['skills'] = json.dumps(validated_data['skills'])
        return super().update(instance, validated_data)


# 🧠 Question Serializer
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


# 📊 Result Serializer
class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = '__all__'