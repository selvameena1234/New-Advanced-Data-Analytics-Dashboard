from django.db import models

# Create your models here.
from django.db import models

class Record(models.Model):
    name = models.CharField(max_length=255)
    value = models.IntegerField(default=0)

    def __str__(self):
        return self.name