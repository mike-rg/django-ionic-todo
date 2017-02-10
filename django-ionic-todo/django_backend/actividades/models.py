from __future__ import unicode_literals

from django.db import models


class Actividades(models.Model):
    nombre = models.CharField(max_length=80, default='Nombre actividad')
    descripcion = models.CharField(max_length=100, default='Descripcion de la actividad')
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificacion = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "%s %s" % (self.nombre, self.descripcion)