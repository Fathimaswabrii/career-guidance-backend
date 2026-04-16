from django.contrib import admin

# Register your models here.

from .models import Career, Stream, User, Profile, Question

admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Question)
admin.site.register(Career)
admin.site.register(Stream)