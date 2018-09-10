import datetime
from django.db import models

YEAR_CHOICES = []
for r in range(1996, (datetime.datetime.now().year + 1)):
    YEAR_CHOICES.append((r, r))


class UserProfile(models.Model):
    Year = models.IntegerField('Year', choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    Name = models.CharField(max_length=30, null=False)
    Title = models.CharField(max_length=30, null=False)
    Info = models.CharField(max_length=1500, null=False)  # 1500 chars
    Picture = models.ImageField(
        help_text="If you receive an error on saving Images, Please go back and Re-upload and Try Again. png Images work but jpeg's are recommended")
    Profile_URL = models.URLField(blank=True)
    UserTypeChoices = (
        ('Board', 'Board'),
        ('Staff', 'Staff'),
        ('Intern', 'Intern'),
        ('Fellow', 'Fellow'),
    )
    UserType = models.CharField(
        choices=UserTypeChoices,
        null=False,
        max_length=20
    )

    def __str__(self):
        return self.Name
