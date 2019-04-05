from database import edamam_api
from database import spoonacular_api
from database import yummly_api
from database import puppy_api
from dto import nutrition_dto

def get_spoonacular_nutrition(id):
    nutrition = spoonacular_api.getNutrition(id)
    nutrition_response = nutrition['bad'] + nutrition['good']
    nutrition_list_dto = []
    for item in nutrition_response:
        nutrition_list_dto.append(nutrition_dto.Nutrition(
            title = item['title'],
            amount = item['amount'],
            indented = item['indented'],
            percentOfDailyNeeds = item['percentOfDailyNeeds']
            ))
    return nutrition_list_dto
