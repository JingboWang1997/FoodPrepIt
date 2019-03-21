class RecipeSummary(object):
    def __init__(self, **kwargs):
        for field in ('sourceAPI', 'recipeLink', 'title', 'readyInMinutes','instruction','ingredients'):
            setattr(self, field, kwargs.get(field, None))