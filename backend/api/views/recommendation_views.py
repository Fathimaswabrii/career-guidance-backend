"""
Recommendation views: Streams, Courses, Skills, Analytics
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import Career, Result, Stream


class StreamRecommendation(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        career_name = request.data.get("career")

        if not career_name:
            return Response({"error": "Career is required"})

        try:
            career = Career.objects.get(name=career_name)

            # 🔥 Find stream that contains this career
            stream = Stream.objects.filter(careers=career).first()

            if not stream:
                return Response({"message": "No stream linked to this career"})

            return Response({
                "stream": stream.name,
                "careers": [c.name for c in stream.careers.all()]
            })

        except Career.DoesNotExist:
            return Response({"message": "Career not found"})


class CourseRecommendation(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        career_name = request.data.get('career')

        try:
            career = Career.objects.get(name=career_name)
            courses = career.courses.split(',')
        except Career.DoesNotExist:
            courses = ["No courses found"]

        return Response({
            "career": career_name,
            "recommended_courses": courses
        })


class SkillRecommendationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data

        # Get scores
        scores = {
            "linguistic": data.get("linguistic", 0),
            "musical": data.get("musical", 0),
            "bodily": data.get("bodily", 0),
            "logical": data.get("logical", 0),
            "spatial": data.get("spatial", 0),
            "interpersonal": data.get("interpersonal", 0),
            "intrapersonal": data.get("intrapersonal", 0),
            "naturalist": data.get("naturalist", 0),
        }

        # Define suggestions
        suggestions_map = {
            "linguistic": "Read books, write daily, improve communication",
            "logical": "Solve puzzles, coding practice, math exercises",
            "spatial": "Drawing, design tools, visualization exercises",
            "interpersonal": "Teamwork, communication practice",
            "intrapersonal": "Self-reflection, goal setting",
            "naturalist": "Explore nature, environmental studies",
            "bodily": "Sports, physical activities",
            "musical": "Learn instruments, practice music"
        }

        weak_areas = []
        suggestions = {}

        for skill, score in scores.items():
            if score < 15:   # threshold (you can change)
                weak_areas.append(skill)
                suggestions[skill] = suggestions_map[skill]

        return Response({
            "weak_areas": weak_areas,
            "suggestions": suggestions
        })


class AnalyticsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        total_users = Result.objects.count()

        career_counts = {}
        results = Result.objects.all()

        for r in results:
            career_counts[r.predicted_career] = career_counts.get(r.predicted_career, 0) + 1

        return Response({
            "total_results": total_users,
            "career_distribution": career_counts
        })
