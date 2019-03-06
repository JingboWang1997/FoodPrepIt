# {'id': 968871, 
#   'title': 'Roasted Carrots', 
#   'image': 'https://spoonacular.com/recipeImages/968871-312x231.jpg', 
#   'imageType': 'jpg', 
#   'usedIngredientCount': 2, 
#   'missedIngredientCount': 0, 
#   'likes': 694}
class Dish(object):
    def __init__(self, **kwargs):
        for field in ('id', 'title', 'image', 'imageType', 'usedIngredientCount', 'missedIngredientCount', 'likes'):
            setattr(self, field, kwargs.get(field, None))