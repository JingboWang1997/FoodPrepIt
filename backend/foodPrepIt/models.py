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

class CacheRecipeDetail(models.Model):
    title = models.CharField(max_length=300)
    image = models.URLField()
    sourceAPI = models.CharField(max_length=100)
    recipeLink = models.URLField()
    readyInMinutes = models.IntegerField()
    instruction = models.CharField(max_length=10000)
    ingredients = models.CharField(max_length=1000)
    diet = models.CharField(max_length=300)
    budget = models.IntegerField()
    calories = models.IntegerField()

    class Meta:
        unique_together = ('title', 'sourceAPI',)
