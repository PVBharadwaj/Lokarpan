import datetime
import sys
from io import BytesIO
from PIL import Image
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models
from django.core.exceptions import ValidationError

YEAR_CHOICES = []
for r in range(1996, (datetime.datetime.now().year + 1)):
    YEAR_CHOICES.append((r, r))


class UserProfile(models.Model):
    Year = models.IntegerField('Year', choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    Name = models.CharField(max_length=30, null=False)
    Title = models.CharField(max_length=30, null=False)
    Info = models.CharField(max_length=350, null=False)  # 350 chars
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

    # This method requires optimizations : gives exception on trying to update a user profile without updating image
    def save(self):
        try:
            # Opening the uploaded image
            im = Image.open(self.Picture)
            im = im.convert('RGB')
            im.save(self.Picture)
            im = Image.open(self.Picture)

            output = BytesIO()

            # Resize/modify the image
            im = im.resize((198, 267))

            # after modifications, save it to the output
            if im.mode == 'RGBA':
                im.save(output, format='PNG', quality=90)
            else:
                im.save(output, format='JPEG', quality=90)
            output.seek(0)

            # change the image field value to be the newly modified image value
            if im.mode == 'RGBA':
                self.Picture = InMemoryUploadedFile(output, 'ImageField', "%s.png" % self.Picture.name.split('.')[0],
                                                    'image/png',
                                                    sys.getsizeof(output), None)
            else:
                self.Picture = InMemoryUploadedFile(output, 'ImageField', "%s.jpg" % self.Picture.name.split('.')[0],
                                                    'image/jpeg',
                                                    sys.getsizeof(output), None)
            output.flush()
            im.close()

            super(UserProfile, self).save()
        except:
            raise ValidationError(u"The image could not be converted or saved. Please Re-upload and Try Again")

    def publish(self):
        self.save()

    def __str__(self):
        return self.Name
