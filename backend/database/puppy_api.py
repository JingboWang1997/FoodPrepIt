import requests

def search(keywords):
    baseURL = "http://www.recipepuppy.com/api/?i=&p=1"
    addKeywords = "&q=" + keywords
    finalURL = baseURL + addKeywords
    response = requests.get(finalURL)
    return response.json()['results']