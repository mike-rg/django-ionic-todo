from rest_framework import viewsets

from actividades.models import Actividad
from actividades.serializers import ActividadSerializer


class ActividadViewSet(viewsets.ModelViewSet):
    queryset = Actividad.objects.all()
    serializer_class = ActividadSerializer