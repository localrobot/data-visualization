from django.db import models

# Create your models here.


class Case(models.Model):
    title = models.CharField(max_length=100)
    mentioned_in = models.ManyToManyField('self')
    mentiones = models.ManyToManyField('self')
    body = models.TextField()
    judgement_date = models.DateField()
