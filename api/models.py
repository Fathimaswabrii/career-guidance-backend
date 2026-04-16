from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_student = models.BooleanField(default=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    education_level = models.CharField(max_length=50)


class Question(models.Model):
    question = models.TextField()
    category = models.CharField(max_length=50)


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    value = models.IntegerField()

class Result(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    linguistic = models.IntegerField()
    logical = models.IntegerField()
    spatial = models.IntegerField()
    interpersonal = models.IntegerField()
    intrapersonal = models.IntegerField()
    naturalist = models.IntegerField()
    bodily = models.IntegerField()
    musical = models.IntegerField()
    predicted_career = models.CharField(max_length=100)
    match_percentage = models.FloatField()

class Career(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    courses = models.TextField()  # comma separated

    def __str__(self):
        return self.name


class Stream(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    careers = models.ManyToManyField('Career')  # 🔥 LINK

    min_logical = models.IntegerField(default=0)
    min_linguistic = models.IntegerField(default=0)
    min_spatial = models.IntegerField(default=0)
    min_interpersonal = models.IntegerField(default=0)
    min_intrapersonal = models.IntegerField(default=0)
    min_naturalist = models.IntegerField(default=0)
    min_bodily = models.IntegerField(default=0)
    min_musical = models.IntegerField(default=0)

    

    def __str__(self):
        return self.name
    
