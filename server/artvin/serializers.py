from rest_framework import serializers
from artvin.models import Taskmaster, Brigade, Worker, WorkType, Report, Area, Row, Account
from django.contrib.auth import update_session_auth_hash

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
        fields = ("id", "workType", "date", "row", "area")


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


class AccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    confirm_password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Account
        fields = ('id', 'email', 'username', 'created_at', 'updated_at',
                  'name', 'password', 'confirm_password',)
        read_only_fields = ('created_at', 'updated_at',)

        def create(self, validated_data):
            return Account.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.username = validated_data.get('username', instance.username)
            instance.tagline = validated_data.get('tagline', instance.tagline)

            instance.save()

            password = validated_data.get('password', None)
            confirm_password = validated_data.get('confirm_password', None)

            if password and confirm_password and password == confirm_password:
                instance.set_password(password)
                instance.save()

            update_session_auth_hash(self.context.get('request'), instance)

            return instance