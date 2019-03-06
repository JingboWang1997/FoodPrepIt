import requests

def find_by_ingredients():
    response = requests.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&ingredients=carrot%2C+salt",
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"
    })
    return response.json()

def search():
    response = requests.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&type=main+course&query=chicken%2C+carrot",
        headers={"X-RapidAPI-Key": "e0908c685fmsh31f97109ebb2e50p1372a2jsncb26aea897b1"})
    return response.json()