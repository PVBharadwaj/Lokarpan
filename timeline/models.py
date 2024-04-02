from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone

YEAR_CHOICES = []
for year in range(1996, timezone.now().year + 1):
    YEAR_CHOICES.append((year, year))

class Timeline(models.Model):
    Year = models.IntegerField('Year', choices=YEAR_CHOICES, default=timezone.now().year)
    Headline1 = models.CharField(max_length=100, null=True, blank=True)
    Description1 = models.CharField(max_length=1500, null=True, blank=True)
    Picture1 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation", null=True, blank=True)
    
    Headline2 = models.CharField(max_length=100, null=True, blank=True)
    Description2 = models.CharField(max_length=1500, null=True, blank=True)
    Picture2 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation", null=True, blank=True)
    
    Headline3 = models.CharField(max_length=100, null=True, blank=True)
    Description3 = models.CharField(max_length=1500, null=True, blank=True)
    Picture3 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation", null=True, blank=True)
    
    Headline4 = models.CharField(max_length=100, null=True, blank=True)
    Description4 = models.CharField(max_length=1500, null=True, blank=True)
    Picture4 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation", null=True, blank=True)
    
    Headline5 = models.CharField(max_length=100, null=True, blank=True)
    Description5 = models.CharField(max_length=1500, null=True, blank=True)
    Picture5 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation", null=True, blank=True)
    
    Headline6 = models.CharField(max_length=100, null=True, blank=True)
    Description6 = models.CharField(max_length=1500, null=True, blank=True)
    Picture6 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation", null=True, blank=True)

    def __str__(self):
        return str(self.Year)
