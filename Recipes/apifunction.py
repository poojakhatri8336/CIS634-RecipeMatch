from .constants import Constant
from .models import Pantry
import requests
import json

class HttpResponse(object):
    def __init__(self, retJson):
        self.__dict__ = json.loads(retJson)

def GetRecipe(pantry):
    payload = {"token":Constant.ApiKey}

    path = "https://api.spoonacular.com/recipes/findByIngredients"

    ingredients = str(pantry)
    number = 1
    limitLicense = true
    ranking = 1
    ignorePantry = true

    payload["ingredients"] = str(ingredients)
    payload["number"] = str(number)
    payload["limitLicense"] = str(limitLicense)
    payload["ranking"] = str(ranking)
    payload["ignorePantry"] = str(ignorePantry)

    r = requests.get(path, params=payload)
    responseObj = HttpResponse(r.content)