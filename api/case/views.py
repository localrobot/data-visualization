# from django.shortcuts import render
from rest_framework import viewsets

from . import models, serializers

# Create your views here.


class CaseViewSet(viewsets.ModelViewSet):
    queryset = models.Case.objects.all()
    serializer_class = serializers.CaseSerializer
