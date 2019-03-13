import requests

def search(keywords):
    baseURL = "http://api.yummly.com/v1/api/recipes?_app_id=e5b85650&_app_key=ff1b1efa50ce7f1eed8e922aafca46a3&requirePictures=true"
    addKeywords = "&q=" + keywords
    finalURL = baseURL + addKeywords

    response = requests.get(finalURL)
    return response.json()['matches']