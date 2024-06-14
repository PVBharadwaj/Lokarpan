# from django.shortcuts import render

# from .models import Newsletter
# from .serializers import NewsletterSerializer
# from rest_framework import viewsets

# # Create your views here.
# class NewletterView(viewsets.ModelViewSet):
#     queryset = Newsletter.objects.all()
#     serializer_class = NewsletterSerializer





from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Subscriber
from .serializers import SubscriberSerializer


@api_view(['POST'])
def subscribe(request):
    if request.method == 'POST':
        serializer = SubscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
