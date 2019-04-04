from database import spoonacular_api
from database import yummly_api
from dto import dish_summary_dto
from service import search_service
from service import sql_service
from foodPrepIt.models import CacheRecipeDetail
from django.db import IntegrityError
from django.db import connection
 
def get_spoonacular_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit):
    dish_list = spoonacular_api.searchFromIngredients(ingredients)
    dish_summary_dto_list = []
    filtered_list = dish_list
    store_image = ''

    for dish in dish_list:
        # print('id: ', str(dish['id']))
        # print('title: ',dish['title'])
        
        store_diet = ''
        store_prepTime = -1
        store_calories = -1
        ingredients_string = ''

        check = sql_service.check_key_exist(dish['title'],'Spoonacular')
        if check!=0:
            print('existing key')

            response = sql_service.get_db_data("readyInMinutes,calories,image,diet,ingredients",dish['title'],'Spoonacular')
            store_prepTime = response[0]
            store_calories = response[1]
            store_image = response[2]
            store_diet = response[3]
            ingredients_list = response[4]
            for item in ingredients_list:
                ingredients_string += item

        else:
            recipe = spoonacular_api.getRecipe(str(dish['id']))
            nutrition = spoonacular_api.getNutrition(str(dish['id']))

            if recipe['vegetarian']:
                store_diet += 'vegetarian,'
            if recipe['vegan']:
                store_diet += 'vegan,'
            
            ingredients_raw = recipe['extendedIngredients']
            ingredients_list = []
            for item in ingredients_raw:
                ingredients_list.append(item['originalString'])
                ingredients_string += item['originalString']

            excludeList = excludedIngredients.split(',')
            excludeList = excludeList[:-1]

            store_prepTime = recipe['readyInMinutes']
            store_calories = nutrition['calories']
            
            try:
                cachEntry = CacheRecipeDetail(
                    title = dish['title'], 
                    image = dish['image'], 
                    sourceAPI = 'Spoonacular', 
                    recipeLink = recipe['sourceUrl'],
                    readyInMinutes = recipePrepTime,
                    instruction = recipe['instructions'] if recipe['instructions'] != None else '',
                    ingredients = ingredients_list,
                    diet = store_diet,
                    # budget = priceBreakdown['totalCostPerServing'],
                    budget = -1,
                    calories = int(store_calories)
                    )
                cachEntry.save()
            except IntegrityError:
                pass

        print('calories',store_calories)
        if dietRestriction != '' and dietRestriction not in store_diet:
            filtered_list.remove(dish)
        elif prepTime != '' and store_prepTime > int(prepTime):
            filtered_list.remove(dish)
        elif calorieLimit != '' and store_calories > int(calorieLimit):
            filtered_list.remove(dish)
        elif excludedIngredients != '':
            for item in excludeList:
                if item in ingredients_string:
                    filtered_list.remove(dish)
                    break
        
        if dish in filtered_list:
            print(dish['title'])
            dish_summary_dto_list.append(dish_summary_dto.DishSummary(
                id = dish['id'], 
                title = dish['title'], 
                image = dish['image'],
                recipeLink = '',
                sourceAPI = 'Spoonacular'))



    # dish_summary_dto_list = [ dish_summary_dto.DishSummary(
    #     id = dish['id'], 
    #     title = dish['title'], 
    #     image = dish['image'],
    #     recipeLink = '',
    #     sourceAPI = 'Spoonacular') for dish in filtered_list]
    return dish_summary_dto_list

def get_yummly_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit):
    return search_service.get_yummly_data('',ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit)





