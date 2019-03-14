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