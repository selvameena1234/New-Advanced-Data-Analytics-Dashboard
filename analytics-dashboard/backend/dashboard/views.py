from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Record
from .serializers import RecordSerializer

@api_view(['GET'])
def get_data(request):
    data = Record.objects.all()
    serializer = RecordSerializer(data, many=True)
    return Response(serializer.data)