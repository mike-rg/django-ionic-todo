from rest_framework import serializers

from actividades.models import Actividad


class ActividadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Actividad
        fields = ('titulo', 'descripcion', 'fecha_creacion', 'fecha_modificacion')