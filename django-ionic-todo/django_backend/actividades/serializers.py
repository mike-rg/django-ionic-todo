from rest_framework import serializers

from actividades.models import Actividades


class ActividadesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actividades
        fields = ('nombre', 'descripcion', 'fecha_creacion', 'fecha_modificacion')