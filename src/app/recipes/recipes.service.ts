import { Recipe } from './recipes.model';
import {
  EventEmitter,
  Injectable,
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  public selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
