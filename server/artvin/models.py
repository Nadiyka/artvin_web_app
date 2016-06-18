from django.db import models
import json

class Brigade(models.Model):
    number = models.IntegerField(unique=True)
    taskmaster_name = models.CharField(max_length=100, blank=True)

class Taskmaster(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    brigade = models.ForeignKey(Brigade, to_field='number')

class Worker(models.Model):
    name = models.CharField(max_length=100)
    brigade_number = models.ForeignKey(Brigade, to_field='number')

class WorkType(models.Model):
    name = models.CharField(max_length=30)
    standart = models.IntegerField()


class Area(models.Model):
    name = models.CharField(max_length=30)
    coordLat1 = models.CharField(max_length=30)
    coordLat2 = models.CharField(max_length=30)
    coordLon1 = models.CharField(max_length=30)
    coordLon2 = models.CharField(max_length=30)
    brigade = models.ForeignKey(Brigade, to_field='number')

class Row(models.Model):
    area = models.ForeignKey(Area)
    bushes = models.IntegerField()
    
class Report(models.Model):
    workType = models.ForeignKey(WorkType)
    date = models.CharField(max_length=4)
    row = models.ForeignKey(Row)
    area = models.ForeignKey(Area)