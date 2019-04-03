from foodPrepIt.models import Food
import datetime
from django.db import IntegrityError

def get_history():
    history_list = Food.objects.all()
    return history_list

def save_food(food, image):
    print('saving')
    print(food)
    food = Food(
        title = food.title, 
        image = image, 
        sourceAPI = food.sourceAPI, 
        recipeLink = food.recipeLink, 
        readyInMinutes = float(food.readyInMinutes) if food.readyInMinutes != None else -1,
        instruction = food.instruction if food.instruction != None else '',
        ingredients = food.ingredients if food.ingredients != None else '',
        date = datetime.datetime.now())
    try:
        food.save()
    except IntegrityError:
        pass
    print("created: ")
    print(food)