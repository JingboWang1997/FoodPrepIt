import requests

def search(keywords,dietRestriction,excludedIngredients,prepTime):
    baseURL = "http://api.yummly.com/v1/api/recipes?_app_id=e5b85650&_app_key=ff1b1efa50ce7f1eed8e922aafca46a3&requirePictures=true"
    addDietRestriction = ''
    addExcludedIngredients = ''
    addPrepTime = ''
    addCalorieLimit = ''

    addKeywords = "&q=" + keywords
    
    if dietRestriction != '':
        addDietRestriction = '&allowedDiet[]=' + dietRestriction

    if excludedIngredients != '':
        excludedList = excludedIngredients.split(',')
        excludedList = excludedList[:-1]
        for item in excludedList:
            addExcludedIngredients = addExcludedIngredients + '&excludedIngredient[]=' + item

    if prepTime != '':
        addPrepTime = "&maxTotalTimeInSeconds=" + str(int(prepTime)*60)

    finalURL = baseURL + addKeywords + addDietRestriction + addExcludedIngredients + addPrepTime
    print(finalURL)
    
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