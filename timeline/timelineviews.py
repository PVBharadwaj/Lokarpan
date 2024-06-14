from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets, generics
from .models import *
from .serializers import *
from django.http import JsonResponse
from rest_framework.response import Response

class Timeline(viewsets.ModelViewSet):
    queryset = Timeline.objects.all()
    serializer_class = TimelineSerializer