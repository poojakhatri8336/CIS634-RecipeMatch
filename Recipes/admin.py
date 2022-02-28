from django.contrib import admin
from .models import Recipe, Ingredient

# Register your models here.

class RecipeAdmin(admin.ModelAdmin):
    pass

class IngredientAdmin(admin.ModelAdmin):
    pass

admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Ingredient, IngredientAdmin)
