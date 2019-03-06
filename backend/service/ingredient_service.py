from database import spoonacular_api
from dto import dish_dto
 
def getSpoonacularData():
    dish_list = spoonacular_api.find_by_ingredients()
    dish_dto_list = [ dish_dto.Dish(
        id = dish['id'], 
        title = dish['title'], 
        image = dish['image'],
        imageType = dish['imageType'],
        usedIngredientCount = dish['usedIngredientCount'],
        missedIngredientCount = dish['missedIngredientCount'],
        likes = dish['likes']) for dish in dish_list]
    return dish_dto_list