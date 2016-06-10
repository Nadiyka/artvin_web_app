from django.db import models
from django.contrib.auth.models import AbstractBaseUser



class Taskmaster(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=20)

class Brigade(models.Model):
    number = models.IntegerField()
    taskmaster = models.OneToOneField(
        Taskmaster,
        primary_key=True,
    )

class Worker(models.Model):
    name = models.CharField(max_length=100)
    brigade_number = models.ForeignKey(Brigade)
