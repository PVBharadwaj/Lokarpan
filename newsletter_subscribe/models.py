# from django.db import models

# # Create your models here.

# class Newsletter(models.Model):
#     email = models.EmailField(blank=False)

#     def __str__(self):
#         return self.email
    


from django.db import models

class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    newsletters = models.JSONField()

    def __str__(self):
        return self.email
