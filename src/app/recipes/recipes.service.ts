import { Recipe } from './recipes.model';
import {
  EventEmitter,
  Injectable,
} from '@angular/core';

@Injectable({ providedIn : 'root' })
export class RecipesService {
  public selectedRecipe = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe('a test recipe','this is simply a test','https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg'),
    new Recipe('recipe','this is simply a test','https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg'),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
