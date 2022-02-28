from django import forms
from .models import Ingredient

class RecipeForm(forms.Form):
    title = forms.CharField(max_length = 255,
                            widget = forms.TextInput(attrs = {
                                "class": "form-control",
                                "placeholder": "Recipe name"
                                })
                            )
    instructions = forms.CharField(widget = forms.Textarea(attrs = {
        "class": "form-control",
            "placeholder": "Recipe Instructions"
            })
                                   )
    ingredients = forms.MultipleChoiceField(widget = forms.CheckboxSelectMultiple,
                                           choices = [(choice.pk, choice.name) for choice in Ingredient.objects.all()])
