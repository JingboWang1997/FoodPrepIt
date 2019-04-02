"""foodPrepIt URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from views import dish_view
from rest_framework import routers
from django.conf.urls import url, include

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    path('getDishByIngredientsDemo', dish_view.getDishByIngredient),
    path('getDishByKeywords', dish_view.getDishByKeywords),
    path('getRecipe', dish_view.getRecipe),
    path('getDishFromIngredients', dish_view.getDishFromIngredients),
    path('getHistory', dish_view.getHistory),
    path('saveFood', dish_view.saveFood)
]
