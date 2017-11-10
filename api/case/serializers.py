from rest_framework import serializers

from . import models


class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Case
        fields = '__all__'
