from rest_framework import status, viewsets
from rest_framework.response import Response
from artvin.models import Taskmaster, Brigade, Worker
from artvin.serializers import TaskmasterSerializer, BrigadeSerializer,WorkerSerializer


class TaskmasterViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Chain objects """
    queryset = Taskmaster.objects.all()
    serializer_class = TaskmasterSerializer
    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            taskmaster = Taskmaster(**serializer.validated_data)
            taskmaster.save()

            return Response(
            serializer.validated_data, status=status.HTTP_201_CREATED
            )

        return Response({
            'status': 'Bad request',
            'message': 'Taskmaster could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)



class BrigadeViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Store objects """
    queryset = Brigade.objects.all()
    serializer_class = BrigadeSerializer


class WorkerViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Employee objects """
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer
    