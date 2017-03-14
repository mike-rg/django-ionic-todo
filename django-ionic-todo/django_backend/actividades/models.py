from __future__ import unicode_literals

from django.db import models


class Actividad(models.Model):
    class Meta:
        verbose_name = "actividad"
        verbose_name_plural = "actividades"

    titulo = models.CharField(max_length=80, default='Nombre de la actividad')
    descripcion = models.CharField(max_length=100, default='Descripcion de la actividad')
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificacion = models.DateTimeField(auto_now=True)