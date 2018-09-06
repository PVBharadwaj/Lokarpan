from django.db import models
from django.utils import timezone

reportVersionChoices = (

    ('latest', 'latest'),

)




class Report(models.Model):
    reportVersion = models.CharField(choices=reportVersionChoices, blank=False, unique=True, max_length=50,
                                     default='latest')
    FCRAreportFile = models.FileField(blank=False)
    LegalreportFile = models.FileField(blank=False)
    PlanningCommisionreportFile = models.FileField(blank=False)
    addedDate = models.DateField(
        default=timezone.now)

    def publish(self):
        self.save()

    def __str__(self):
        return self.addedDate.strftime("%Y-%m-%d")
