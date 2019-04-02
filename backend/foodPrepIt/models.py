from django.db import models

class Food(models.Model):
    title = models.CharField(max_length=300, unique=True)
    image = models.URLField()
    sourceAPI = models.CharField(max_length=100)
    recipeLink = models.URLField()
    readyInMinutes = models.IntegerField()
    instruction = models.CharField(max_length=10000)
    ingredients = models.CharField(max_length=1000)
    date = models.DateField()

    def __unicode__(self):
        return self.title