from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from serializers import dish_serializer
from rest_framework.decorators import api_view

from service import search_service
from service import recipe_service
from service import ingredient_service
from service import history_service

# keyword search
@api_view(['POST'])
def getDishByKeywords(request):
    keywords = request.data['keywords']
    dietRestriction = request.data['dietRestriction']
    excludedIngredients = request.data['excludedIngredients']
    budget = request.data['budget']
    prepTime = request.data['prepTime']
    calorieLimit = request.data['calorieLimit']

    try:
        dishes = search_service.get_spoonacular_data(keywords,dietRestriction,excludedIngredients,prepTime,calorieLimit) \
        + search_service.get_edamam_data(keywords,dietRestriction,excludedIngredients,prepTime,calorieLimit) \
        + search_service.get_yummly_data(keywords,'',dietRestriction,excludedIngredients,prepTime,calorieLimit) \
        + search_service.get_puppy_data(keywords)
    except:
        print('Using only 2 APIs')
        dishes = search_service.get_yummly_data(keywords,'',dietRestriction,excludedIngredients,prepTime,calorieLimit) \
        + search_service.get_puppy_data(keywords)
    
    # for evaluation
    # dishes = search_service.get_spoonacular_data(keywords,dietRestriction,excludedIngredients,prepTime,calorieLimit)

    serializer = dish_serializer.DishSummarySerializer(
        instance=dishes, many=True)
    return Response(serializer.data)

# get recipe
@api_view(['POST'])
def getRecipe(request):
    info = ''
    sourceAPI = request.data['source']
    print('fetching detail from ', sourceAPI)
    if sourceAPI == 'Yummly':
        id = request.data['id']
        info = recipe_service.get_yummly_recipe(id)
    elif sourceAPI == 'Spoonacular':
        id = request.data['id']
        info = recipe_service.get_spoonacular_recipe(id)
    else:
        info = recipe_service.get_unorganized_recipe(request.data)
        # history_service.save_food(request.data, request.data['img'], recipeLink=request.data['recipeLink'])
    history_service.save_food(info, request.data['img'], request.data['userid'])
    serializer = dish_serializer.RecipeSerializer(instance=info, many=False)
    return Response(serializer.data)


# ingredient search
@api_view(['POST'])
def getDishFromIngredients(request):
    ingredients = request.data['ingredients']
    # dietRestriction = request.data['dietRestriction']
    # excludedIngredients = request.data['excludedIngredients']
    # budget = request.data['budget']
    # prepTime = request.data['prepTime']
    # calorieLimit = request.data['calorieLimit']

    dietRestriction = ''
    excludedIngredients = ''
    budget = ''
    prepTime = ''
    calorieLimit = ''
    
    try:
        dishes = ingredient_service.get_spoonacular_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit) \
        + ingredient_service.get_yummly_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit)
    except:
        dishes = ingredient_service.get_spoonacular_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit)

    # for evaluation
    # dishes = ingredient_service.get_spoonacular_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit)

    serializer = dish_serializer.DishSummarySerializer(
        instance=dishes, many=True)
    return Response(serializer.data)

# get all history
@api_view(['POST'])
def getHistory(request):
    histories = history_service.get_history(request.data['userid'])
    serializer = dish_serializer.FoodHistory(
        instance=histories, many=True)
    return Response(serializer.data)







