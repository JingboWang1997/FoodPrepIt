import requests

def search(keywords):
    baseURL = "https://api.edamam.com/search?app_id=6991a204&app_key=c29f4e593f43af10bf8ceaabcbebf429&from=0&to=10"
    addKeywords = "&q=" + keywords
    finalURL = baseURL + addKeywords
    response = requests.get(finalURL)
    return response.json()['hits']