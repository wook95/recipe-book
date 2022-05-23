import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredientChangeSub: Subscription;
  public ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangeSub = this.shoppingListService.changedIngredients
    .subscribe((ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    });
  }

  ngOnDestroy() {
    this.ingredientChangeSub.unsubscribe();
  }
}
