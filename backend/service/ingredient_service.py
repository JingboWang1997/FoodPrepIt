from database import spoonacular_api
from database import yummly_api
from dto import dish_summary_dto
from service import search_service
from foodPrepIt.models import CacheRecipeDetail
from django.db import IntegrityError
 
def get_spoonacular_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit):
    dish_list = spoonacular_api.searchFromIngredients(ingredients)
    filtered_list = dish_list

    for dish in dish_list:
        print('id: ', str(dish['id']))
        recipe = spoonacular_api.getRecipe(str(dish['id']))
        nutrition = spoonacular_api.getNutrition(str(dish['id']))

        store_diet = ''
        if recipe['vegetarian']:
            store_diet += 'vegetarian,'
        if recipe['vegan']:
            store_diet += 'vegan,'
        
        ingredients_raw = recipe['extendedIngredients']
        ingredients_list = []
        ingredients_string = ''
        for item in ingredients_raw:
            ingredients_list.append(item['originalString'])
            ingredients_string += item['originalString']
        print(ingredients_list)

        excludeList = excludedIngredients.split(',')
        excludeList = excludeList[:-1]

        if dietRestriction != '' and dietRestriction not in store_diet:
            filtered_list.remove(dish)
        elif prepTime != '' and recipe['readyInMinutes'] > int(prepTime):
            filtered_list.remove(dish)
        elif calorieLimit != '' and int(nutrition['calories']) > int(calorieLimit):
            filtered_list.remove(dish)
        elif excludedIngredients != '':
            for item in excludeList:
                if item in ingredients_string:
                    filtered_list.remove(dish)
                    break
        # store_instructions = recipe['instructions'] if recipe['instructions'] != None else ''
        # print('store_instructions',store_instructions)
        
        try:
            cachEntry = CacheRecipeDetail(
                title = dish['title'], 
                image = dish['image'], 
                sourceAPI = 'Spoonacular', 
                recipeLink = recipe['sourceUrl'],
                readyInMinutes = recipe['readyInMinutes'],
                instruction = recipe['instructions'] if recipe['instructions'] != None else '',
                ingredients = ingredients_list,
                diet = store_diet,
                # budget = priceBreakdown['totalCostPerServing'],
                budget = -1,
                calories = str(nutrition['calories'])
                )
            cachEntry.save()
        except IntegrityError:
            pass

    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = dish['id'], 
        title = dish['title'], 
        image = dish['image'],
        recipeLink = '',
        sourceAPI = 'Spoonacular') for dish in filtered_list]
    return dish_summary_dto_list

def get_yummly_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit):
    return search_service.get_yummly_data('',ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit)





