import requests

def search(keywords, excludedIngredients, prepTime, calorieLimit):
    baseURL = "https://api.edamam.com/search?app_id=6991a204&app_key=c29f4e593f43af10bf8ceaabcbebf429&from=0&to=10"
    addKeywords = "&q=" + keywords
    addExcludedIngredients = ''
    addPrepTime = ''
    addCalorieLimit = ''

    if excludedIngredients != '':
        excludeList = excludedIngredients.split(',')
        excludeList = excludeList[:-1]
        for item in excludeList:
            addExcludedIngredients = addExcludedIngredients + '&excluded=' + item
    
    if prepTime != '':
        addPrepTime = '&time=' + str(prepTime)

    if calorieLimit != '':
        addCalorieLimit = '&calories=' + str(calorieLimit)

    finalURL = baseURL + addKeywords + addExcludedIngredients + addPrepTime + addCalorieLimit
    print(finalURL)
    response = requests.get(finalURL)
    return response.json()['hits']