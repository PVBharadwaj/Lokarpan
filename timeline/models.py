from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone

YEAR_CHOICES = []
for year in range(1996, timezone.now().year + 1):
    YEAR_CHOICES.append((year, year))

class Timeline(models.Model):
    Year = models.IntegerField('Year', choices=YEAR_CHOICES, default=timezone.now().year)
    Headline1 = models.CharField(max_length=100, null=False)
    Description1 = models.CharField(max_length=1500, null=False)
    Picture1 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation")
    Headline2 = models.CharField(max_length=100, null=False)
    Description2 = models.CharField(max_length=1500, null=False)
    Picture2 = models.ImageField(
        help_text="Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation")

    def __str__(self):
        return str(self.Year)
