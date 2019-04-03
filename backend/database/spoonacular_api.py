import requests

def find_by_ingredients():
    response = requests.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=60&ranking=1&ingredients=carrot%2C+salt",
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"
    })
    return response.json()

def search(keywords,dietRestriction,excludedIngredients):
    baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?"
    
    addKeywords = "query=" + keywords
    addDietRestriction = ''
    addExcludedIngredients = ''
    if dietRestriction != '':
        addDietRestriction = '&diet=' + dietRestriction
    if excludedIngredients != '':
        addExcludedIngredients = '&excludeIngredients=' + excludedIngredients
    
    finalURL = baseURL + addKeywords + addDietRestriction + addExcludedIngredients
    print(finalURL)
    response = requests.get(finalURL,
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"})
    return response.json()

def getRecipe(id):
    finalURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/information"
    response = requests.get(finalURL,
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"})
    return response.json()


def searchFromIngredients(ingredients):
    baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=40&ranking=1&ingredients="
    finalURL = baseURL + ingredients
    response = requests.get(finalURL,
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"
    })
    return response.json()