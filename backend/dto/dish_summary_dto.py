class DishSummary(object):
    def __init__(self, **kwargs):
        for field in ('id', 'title', 'image', 'recipeLink','sourceAPI'):
            setattr(self, field, kwargs.get(field, None))