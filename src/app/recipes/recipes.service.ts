import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesService {

  recipeSub = new BehaviorSubject<Recipe[]>([
    new Recipe(
      'a test recipe',
      'this is simply a test',
      'https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg',
      [
        new Ingredient('Meat', 1)
        , new Ingredient('French Fries', 20),
      ],
    ),
    new Recipe('recipe', 'this is simply a test', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg', [
      new Ingredient('Buns', 1)
      , new Ingredient('Meat', 20),
    ]),
  ]);

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe(index: number) {
    return this.recipeSub.getValue()[index];
  }

  getRecipes() {
    return this.recipeSub.getValue();
  }

  addRecipe(recipe: Recipe) {
    this.recipeSub.next([...this.recipeSub.getValue(), recipe]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    const recipes = this.recipeSub.getValue();
    recipes[index] = newRecipe;
    this.recipeSub.next(recipes);
  }

  addIngredientToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  deleteRecipe(index: number) {
    const recipes = this.recipeSub.getValue();
    recipes.splice(index, 1);
    this.recipeSub.next(recipes);
  }
}
