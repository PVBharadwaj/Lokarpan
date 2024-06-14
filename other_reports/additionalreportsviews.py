from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets, generics
from .models import *
from .serializers import *
from django.http import JsonResponse
from rest_framework.response import Response

class Report(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = AdditionalReportSerializer