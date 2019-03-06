from database import edamam_api
from database import spoonacular_api
from database import yummly_api
from database import puppy_api
from dto import dish_summary_dto

def get_spoonacular_data():
    search_result = spoonacular_api.search()
    print(search_result)
    dish_list = search_result['results']
    baseUri = search_result['baseUri']
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = i, 
        title = dish['title'], 
        image = baseUri + dish['imageUrls'][0],
        sourceAPI = 'Spoonacular') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list

def get_edamam_data():
    dish_list = edamam_api.search()
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = i, 
        title = dish['recipe']['label'], 
        image = dish['recipe']['image'],
        sourceAPI = 'Edamam') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list

def get_yummly_data():
    dish_list = yummly_api.search()
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = dish['id'], 
        title = dish['recipeName'], 
        image = dish['imageUrlsBySize']['90'],
        sourceAPI = 'Yummly') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list

def get_puppy_data():
    dish_list = puppy_api.search()
    dish_summary_dto_list = [ dish_summary_dto.DishSummary(
        id = i, 
        title = dish['title'],
        image = dish['thumbnail'],
        sourceAPI = 'Puppy') for i, dish in enumerate(dish_list)]
    return dish_summary_dto_list