import requests

def search(keywords):
    baseURL = "http://api.yummly.com/v1/api/recipes?_app_id=e5b85650&_app_key=ff1b1efa50ce7f1eed8e922aafca46a3&requirePictures=true"
    addKeywords = "&q=" + keywords
    finalURL = baseURL + addKeywords

    response = requests.get(finalURL)
    return response.json()['matches']

def getRecipe(id):
    finalURL = "http://api.yummly.com/v1/api/recipe/" + id + "?_app_id=e5b85650&_app_key=ff1b1efa50ce7f1eed8e922aafca46a3"
    response = requests.get(finalURL)
    return response.json()

def searchFromIngredients(ingredients):
    baseURL = "http://api.yummly.com/v1/api/recipes?_app_id=e5b85650&_app_key=ff1b1efa50ce7f1eed8e922aafca46a3&requirePictures=true"
    ingredientsList = ingredients.split(',')
    ingredientsList = ingredientsList[:-1]
    print(ingredientsList)
    for ing in ingredientsList:
        baseURL = baseURL + "&allowedIngredient[]=" + ing
    response = requests.get(baseURL)
    return response.json()['matches']