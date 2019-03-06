from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from serializers import dish_serializer
from rest_framework.decorators import api_view

from service import search_service

@api_view(['GET'])
def getDishByIngredient(request):
    dishes = search_service.get_spoonacular_data() + search_service.get_edamam_data() + search_service.get_yummly_data() + search_service.get_puppy_data()
    serializer = dish_serializer.DishSummarySerializer(
        instance=dishes, many=True)
    return Response(serializer.data)