import {
  EventEmitter,
  Injectable,
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn:'root'})
export class ShoppingListService {
   private ingredients:Ingredient[] =[
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',5),
  ];
   changedIngredients = new EventEmitter<Ingredient[]>();

   getIngredients() {
     return [...this.ingredients];
   }

   addIngredient(ingredient:Ingredient) {
     this.ingredients.push(ingredient);
     this.changedIngredients.emit([...this.ingredients]);
   }

  addIngredients(ingredients:Ingredient[]){
     this.ingredients.push(...ingredients);
     this.changedIngredients.emit([...this.ingredients]);
  }
}