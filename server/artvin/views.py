from rest_framework import status, viewsets
from rest_framework.response import Response
from artvin.models import Taskmaster, Brigade, Worker, WorkType, Report, Area, Row
from artvin.serializers import TaskmasterSerializer, BrigadeSerializer,WorkerSerializer, WorkTypeSerializer, ReportSerializer, AreaSerializer, RowSerializer

def getBrigadeNumber(area):
    brigades = Brigade.objects.all()
    brigade_num = 0
    for brigade in brigades:
        if (brigade.id == area.brigade):
            brigade_num == brigade.number
            break
    return brigade_num

def getAreas():
    areas = Area.objects.all()
    for area in areas:
        break
    return areas

class TaskmasterViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Chain objects """
    queryset = Taskmaster.objects.all()
    serializer_class = TaskmasterSerializer



class BrigadeViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Store objects """
    queryset = Brigade.objects.all()
    serializer_class = BrigadeSerializer


class WorkerViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Employee objects """
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer
    
class WorkTypeViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Store objects """
    queryset = WorkType.objects.all()
    serializer_class = WorkTypeSerializer


class ReportViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Employee objects """
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class AreaViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Store objects """
    queryset = Area.objects.all()
    serializer_class = AreaSerializer


class RowViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Employee objects """
    queryset = Row.objects.all()
    serializer_class = RowSerializer


