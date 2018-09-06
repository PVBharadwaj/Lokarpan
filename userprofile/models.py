import datetime
import sys
from io import BytesIO

from PIL import Image
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models

YEAR_CHOICES = []
for r in range(1996, (datetime.datetime.now().year + 1)):
    YEAR_CHOICES.append((r, r))


class UserProfile(models.Model):
    Year = models.IntegerField('Year', choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    Name = models.CharField(max_length=30, null=False)
    Title = models.CharField(max_length=30, null=False)
    Info = models.CharField(max_length=350, null=False)  # 350 chars
    Picture = models.ImageField()
    Profile_URL = models.URLField()
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

    def save(self):
        # Opening the uploaded image
        im = Image.open(self.Picture)
        im = im.convert('RGB')
        im.save(self.Picture)
        im = Image.open(self.Picture)

        output = BytesIO()

        # Resize/modify the image
        im = im.resize((198, 267))

        # after modifications, save it to the output
        im.save(output, format='JPEG', quality=90)
        output.seek(0)

        # change the image field value to be the newly modified image value
        self.Picture = InMemoryUploadedFile(output, 'ImageField', "%s.jpg" % self.Picture.name.split('.')[0],
                                            'image/jpeg',
                                            sys.getsizeof(output), None)

        super(UserProfile, self).save()

    def publish(self):
        self.save()

    def __str__(self):
        return self.Name
