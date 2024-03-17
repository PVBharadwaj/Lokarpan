from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
# from rest_framework import status

# class about_board(APIView):
#     def get(self, request):
#         values = {
#             "values": UserProfile.objects.filter(UserType='Board').order_by('Year', 'Name')
#         }
#         return render(request, 'board/', values)
#         # return Response(values)
    
#     def post(self, request):
#         serializer = UserProfileSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)
        
# class about_staff(APIView):
#     def get(self, request):
#         values = {
#             "values": UserProfile.objects.filter(UserType='Staff').order_by('Year', 'Name')
#         }
#         return render(request, 'staff/', values)
#         # return Response(values)
    
#     def post(self, request):
#         serializer = UserProfileSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)
        
# class about_interns(APIView):
#     def get(self, request):
#         values = {
#             "values": UserProfile.objects.filter(UserType='Intern').order_by('-Year', 'Name')
#         }
#         return render(request, 'educators/', values)
#         # return Response(values)
    
#     def post(self, request):
#         serializer = UserProfileSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)
        
# class about_fellows(APIView):
#     def get(self, request):
#         values = {
#             "values": UserProfile.objects.filter(UserType='Fellow').order_by('-Year', 'Name')
#         }
#         return render(request, 'fellows/', values)
#         # return Response(values)
    
#     def post(self, request):
#         serializer = UserProfileSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)





def about_board(request):
    values = {
        "values": UserProfile.objects.filter(UserType='Board').order_by('Year', 'Name')
    }
    return render(request, 'board/', values)


def about_staff(request):
    values = {
        "values": UserProfile.objects.filter(UserType='Staff').order_by('Year', 'Name')
    }
    return render(request, 'staff/', values)


def about_interns(request):
    values = {
        "values": UserProfile.objects.filter(UserType='Intern').order_by('-Year', 'Name')
    }
    return render(request, 'educators/', values)


def about_fellows(request):
    values = {
        "values": UserProfile.objects.filter(UserType='Fellow').order_by('-Year', 'Name')
    }
    return render(request, 'fellows/', values)