from database import spoonacular_api
from database import yummly_api
from dto import dish_summary_dto
 
def get_spoonacular_from_ingredients(ingredients):
    search_result = spoonacular_api.searchFromIngredients(ingredients)
    print(search_result)
    dish_list = search_result
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = dish['id'], 
        title = dish['title'], 
        image = dish['image'],
        recipeLink = '',
        sourceAPI = 'Spoonacular') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list

def get_yummly_from_ingredients(ingredients,dietRestriction,excludedIngredients,prepTime,calorieLimit):
    dish_list = yummly_api.search('',ingredients,dietRestriction,excludedIngredients,prepTime)
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = dish['id'], 
        title = dish['recipeName'], 
        image = dish['imageUrlsBySize']['90'],
        recipeLink = '',
        sourceAPI = 'Yummly') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list