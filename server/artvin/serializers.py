from rest_framework import serializers
from artvin.models import Taskmaster, Brigade, Worker


class TaskmasterSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Taskmaster model """
    class Meta:
        model = Taskmaster
        fields = ("id", "name", "email", "password")


class BrigadeSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Brigade model """
    class Meta:
        model = Brigade
        fields = (
            "number", "taskmaster"
        )


class WorkerSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Employee model """
    class Meta:
        model = Worker
        fields = ("name", "brigade_number")
