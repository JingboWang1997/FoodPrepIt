import requests

def search():
    response = requests.get("http://www.recipepuppy.com/api/?i=&q=chinese, chicken&p=1")
    return response.json()