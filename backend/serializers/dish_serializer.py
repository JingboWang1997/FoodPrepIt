from rest_framework import serializers

# JSON format
class DishSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=100)
    image = serializers.URLField(max_length=200, min_length=None, allow_blank=True)
    imageType = serializers.CharField(max_length=10)
    usedIngredientCount = serializers.IntegerField()
    missedIngredientCount = serializers.IntegerField()
    likes = serializers.IntegerField()

class DishSummarySerializer(serializers.Serializer):
    id = serializers.CharField()
    title = serializers.CharField(max_length=100)
    image = serializers.URLField(max_length=200, min_length=None, allow_blank=True)
    sourceAPI = serializers.CharField(max_length=20)
    recipeLink = serializers.CharField(max_length=50)

class RecipeSerializer(serializers.Serializer):
    sourceAPI = serializers.CharField(max_length=20)
    recipeLink = serializers.CharField(max_length=50)
    title = serializers.CharField(max_length=20)
    readyInMinutes = serializers.CharField(max_length=20)
    instruction = serializers.CharField(max_length=200)
    ingredients = serializers.ListField(
        child=serializers.CharField(max_length=200))

class FoodHistory(serializers.Serializer):
    title = serializers.CharField(max_length=300)
    image = serializers.URLField()
    sourceAPI = serializers.CharField(max_length=20)
    recipeLink = serializers.URLField()
    readyInMinutes = serializers.IntegerField()
    instruction = serializers.CharField(max_length=10000)
    ingredients = serializers.CharField(max_length=1000)
    date = serializers.DateTimeField()
