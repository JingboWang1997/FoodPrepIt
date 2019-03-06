import requests

def search():
    response = requests.get("https://api.edamam.com/search?q=carrot&app_id=6991a204&app_key=c29f4e593f43af10bf8ceaabcbebf429&from=0&to=10")
    return response.json()['hits']