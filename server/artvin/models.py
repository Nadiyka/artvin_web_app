from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
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

class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError('Users must have a valid email address.')

        if not kwargs.get('username'):
            raise ValueError('Users must have a valid username.')

        account = self.model(
            email=self.normalize_email(email), username=kwargs.get('username')
        )

        account.set_password(password)
        account.save()

        return account

    def create_superuser(self, email, password, **kwargs):
        account = self.create_user(email, password, **kwargs)

        account.is_admin = True
        account.save()

        return account

class Account(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100, blank=True)

    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __unicode__(self):
        return self.email

    def get_name(self):
        return self.name