from django.db import models
from django.utils import timezone

from django.core.exceptions import ValidationError


def validate_hyphen(value):
    if '-' in value:
        raise ValidationError(u'Report Category Cannot Contain Hyphen (-) ')
    return


class addreportCategory(models.Model):
    class Meta:
        verbose_name = 'Report Category'
        verbose_name_plural = 'Report Categories'

    reportCategory = models.CharField(blank=False, max_length=100, unique=True)

    def publish(self):
        self.save()

    def __str__(self):
        return self.reportCategory


class addreportCategoryCode(models.Model):
    class Meta:
        verbose_name = 'Report Code'
        verbose_name_plural = 'Report Codes'

    reportCategory = models.ForeignKey(addreportCategory, on_delete=models.CASCADE)
    reportCode = models.CharField(blank=False, max_length=100, unique=True, validators=[validate_hyphen])

    def publish(self):
        self.save()

    def __str__(self):
        description = self.reportCategory.reportCategory + '-' + self.reportCode
        return description


class addReport(models.Model):
    reportFile = models.FileField(blank=False)
    reportCategoryAndCode = models.ForeignKey(addreportCategoryCode, on_delete=models.CASCADE)
    reportDescription = models.CharField(blank=False, max_length=30)
    reportAddedDate = models.DateField(
        default=timezone.now)

    def publish(self):
        self.save()

    def __str__(self):
        return self.reportDescription
