from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone

import datetime

YEAR_CHOICES = []
for r in range(1996, (datetime.datetime.now().year + 1)):
    YEAR_CHOICES.append((r, r))


def validate_file_extension(value):
    if not value.name.endswith('.pdf'):
        raise ValidationError(u'Only pdf files can be uploaded')


class AnnualReport(models.Model):
    year = models.IntegerField('year', choices=YEAR_CHOICES, default=datetime.datetime.now().year, unique=True)
    report1 = models.FileField(validators=[validate_file_extension])
    reporttitle1 = models.CharField(max_length=50, blank=True)
    report2 = models.FileField(blank=True, validators=[validate_file_extension])
    reporttitle2 = models.CharField(max_length=50, blank=True)
    report3 = models.FileField(blank=True, validators=[validate_file_extension])
    reporttitle3 = models.CharField(max_length=50, blank=True)
    report4 = models.FileField(blank=True, validators=[validate_file_extension])
    reporttitle4 = models.CharField(max_length=50, blank=True)
    report5 = models.FileField(blank=True, validators=[validate_file_extension])
    reporttitle5 = models.CharField(max_length=50, blank=True)
    addedDate = models.DateField(
        default=timezone.now)

    def publish(self):
        self.save()

    def __str__(self):
        return str(self.year)
