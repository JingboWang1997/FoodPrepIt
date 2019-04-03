from database import edamam_api
from database import spoonacular_api
from database import yummly_api
from database import puppy_api
from dto import dish_summary_dto
from foodPrepIt.models import CacheRecipeDetail
from django.db import IntegrityError

# file for keyword searches
def get_spoonacular_data(keywords,dietRestriction,excludedIngredients):
    search_result = spoonacular_api.search(keywords,dietRestriction,excludedIngredients)
    # print(search_result)
    dish_list = search_result['results']
    baseUri = search_result['baseUri']
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = dish['id'], 
        title = dish['title'], 
        image = baseUri + dish['imageUrls'][0],
        recipeLink = '',
        sourceAPI = 'Spoonacular') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list

def get_edamam_data(keywords,excludedIngredients,prepTime,calorieLimit):
    dish_list = edamam_api.search(keywords,excludedIngredients,prepTime,calorieLimit)
    # print("dish list",dish_list)
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = -1, 
        title = dish['recipe']['label'], 
        image = dish['recipe']['image'],
        recipeLink = dish['recipe']['url'],
        sourceAPI = 'Edamam') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list

def get_yummly_data(keywords,dietRestriction,excludedIngredients,prepTime):
    dish_list = yummly_api.search(keywords,dietRestriction,excludedIngredients,prepTime)
    
    # store into cache
    store_diet = ''
    store_calories = -1

    if dietRestriction != '':
        store_diet = dietRestriction
    
    for dish in dish_list:
        recipe = yummly_api.getRecipe(dish['id'])
        for nutrient in recipe['nutritionEstimates']:
            if nutrient['attribute'] == 'ENERC_KCAL':
                store_calories = nutrient['value']
                print('cal_per_serving: ' ,store_calories)
        try:
            cachEntry = CacheRecipeDetail(
                title = dish['recipeName'], 
                image = dish['imageUrlsBySize']['90'], 
                sourceAPI = 'Yummly', 
                recipeLink = recipe['source']['sourceRecipeUrl'],
                readyInMinutes = int(recipe['totalTimeInSeconds']/60),
                instruction = '',
                ingredients = recipe['ingredientLines'],
                diet = store_diet,
                budget = -1,
                calories = int(store_calories)
                )
            cachEntry.save()
        except IntegrityError:
            pass

    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = dish['id'], 
        title = dish['recipeName'], 
        image = dish['imageUrlsBySize']['90'],
        recipeLink = '',
        sourceAPI = 'Yummly') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list

def get_puppy_data(keywords):
    dish_list = puppy_api.search(keywords)
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = -1, 
        title = dish['title'],
        image = dish['thumbnail'],
        recipeLink = dish['href'],
        sourceAPI = 'Puppy') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list