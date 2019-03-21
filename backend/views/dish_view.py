from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from serializers import dish_serializer
from rest_framework.decorators import api_view

from service import search_service
from service import recipe_service

# demo
@api_view(['GET'])
def getDishByIngredient(request):
    dishes = search_service.get_yummly_data()
    # search_service.get_spoonacular_data() + search_service.get_edamam_data() 
    # + search_service.get_yummly_data() + search_service.get_puppy_data()
    serializer = dish_serializer.DishSummarySerializer(
        instance=dishes, many=True)
    return Response(serializer.data)

# keyword search
@api_view(['POST'])
def getDishByKeywords(request):
    keywords = request.data['keywords']
    # dishes = search_service.get_puppy_data(keywords)
    dishes = search_service.get_spoonacular_data(keywords) + search_service.get_edamam_data(keywords) + search_service.get_yummly_data(keywords) + search_service.get_puppy_data(keywords)

    serializer = dish_serializer.DishSummarySerializer(
        instance=dishes, many=True)
    return Response(serializer.data)

# get recipe
@api_view(['POST'])
def getRecipe(request):
    print(request.data['id'])
    info = ''
    sourceAPI = request.data['source']
    if sourceAPI == 'Yummly':
        id = request.data['id']
        info = recipe_service.get_yummly_recipe(id)
    elif sourceAPI == 'Spoonacular':
        id = request.data['id']
        info = recipe_service.get_spoonacular_recipe(id)
    serializer = dish_serializer.RecipeSerializer(instance=info, many=False)
    return Response(serializer.data)








