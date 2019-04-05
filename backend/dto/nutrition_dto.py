class Nutrition(object):
    def __init__(self, **kwargs):
        for field in ('title','amount','indented','percentOfDailyNeeds'):
            setattr(self, field, kwargs.get(field, None))