import requests

def find_by_ingredients():
    response = requests.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&ingredients=carrot%2C+salt",
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"
    })
    return response.json()

def search(keywords):
    baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?"
    addKeywords = "query=" + keywords
    finalURL = baseURL + addKeywords
    response = requests.get(finalURL,
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"})
    return response.json()