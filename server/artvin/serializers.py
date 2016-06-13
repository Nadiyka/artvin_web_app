from rest_framework import serializers
from artvin.models import Taskmaster, Brigade, Worker, WorkType, Report, Area, Row


class TaskmasterSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Taskmaster model """
    class Meta:
        model = Taskmaster
        fields = ("id", "name", "email", "password", "brigade")


class BrigadeSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Brigade model """
    class Meta:
        model = Brigade
        fields = (
            "id", "number", "taskmaster_name"
        )


class WorkerSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Employee model """
    class Meta:
        model = Worker
        fields = ("id", "name", "brigade_number")

class WorkTypeSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Employee model """
    class Meta:
        model = WorkType
        fields = ("id", "name", "standart")

class ReportSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Employee model """
    class Meta:
        model = Report
        fields = ("id", "workType", "date")


class AreaSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Employee model """
    class Meta:
        model = Area
        fields = ("id", "name", "coordLat1", "coordLat2", "coordLon1", "coordLon2", "brigade")

class RowSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Employee model """
    class Meta:
        model = Row
        fields = ("id", "area", "bushes")
