import requests

def search():
    response = requests.get("http://api.yummly.com/v1/api/recipes?_app_id=e5b85650&_app_key=ff1b1efa50ce7f1eed8e922aafca46a3&q=chinese+chicken&requirePictures=true")
    return response.json()