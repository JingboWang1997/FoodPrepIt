from database import edamam_api
from database import spoonacular_api
from database import yummly_api
from database import puppy_api
from dto import recipe_summary_dto

def get_yummly_recipe(id):
    recipe = yummly_api.getRecipe(id)
    returned_info = recipe_summary_dto.RecipeSummary(
    sourceAPI = 'Yummly',
    recipeLink = recipe['source']['sourceRecipeUrl'],
    title = recipe['name'],
    readyInMinutes = str(recipe['totalTimeInSeconds']/60),
    instruction = '',
    ingredients = recipe['ingredientLines'])
    return returned_info
