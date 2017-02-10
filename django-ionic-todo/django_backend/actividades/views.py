from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from actividades.models import Actividades
from actividades.serializers import ActividadesSerializer


class JSONResponse(HttpResponse):
    """
    HttpResponse que renderiza el contenido a JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def lista_de_actividades(request):
    if request.method == 'GET':
        actividades = Actividades.objects.all()
        serializer = ActividadesSerializer(actividades, many=True)
        return JSONResponse(serializer.data)