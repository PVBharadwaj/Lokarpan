from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets, generics
from . models import *
from .serializers import *
from django.http import JsonResponse
from rest_framework.response import Response
# from rest_framework import status

class BoardViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.filter(UserType='Board').order_by('Year', 'Name')
    serializer_class = UserProfileSerializer

class StaffViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.filter(UserType='Staff').order_by('Year', 'Name')
    serializer_class = UserProfileSerializer

class EducatorsViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.filter(UserType='Intern').order_by('-Year', 'Name')
    serializer_class = UserProfileSerializer

class FellowViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.filter(UserType='Fellow').order_by('-Year', 'Name')
    serializer_class = UserProfileSerializer