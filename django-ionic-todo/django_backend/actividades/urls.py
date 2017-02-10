from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^lista_de_actividades/', views.lista_de_actividades, name='lista_de_actividades'),
    # url(r'^crear_actividad/', views.crear_actividad, name='crear_actividad'),
    # url(r'^editar_actividad/', views.editar_actividad, name='editar_actividad'),
]