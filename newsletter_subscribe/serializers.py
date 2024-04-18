# from rest_framework import serializers
# from .models import Newsletter

# class NewsletterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Newsletter
#         fields = '__all__'






from rest_framework import serializers
from .models import Subscriber

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        # fields = ['email', 'newsletters']
        fields = '__all__'