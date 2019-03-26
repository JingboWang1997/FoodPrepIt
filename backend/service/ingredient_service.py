from database import spoonacular_api
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