from foodPrepIt.models import History
import datetime
from django.db import IntegrityError

def get_history(userid):
    history_list = History.objects.all()
    return_list = []
    for history in history_list:
        if (history.userid == userid):
            return_list.append(history)
    return return_list

def save_food(food, image, userid):
    print('saving')
    print(food)
    food = History(
        userid = userid,
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