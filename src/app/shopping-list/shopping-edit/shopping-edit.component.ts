import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  private subscription: Subscription;
  private editedItemIndex: number;
  private editedItem: Ingredient;
  public isEditMode = false;
  @ViewChild('ingredientForm') ingredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.shoppingListService.editingIngredientIndexSub.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.isEditMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.ingredientForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  onSubmit() {
    const value = this.ingredientForm.value;
    if (this.isEditMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount));
    } else {
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
    }
    this.isEditMode = false;
    this.ingredientForm.reset();
  }

  onClear() {
    this.isEditMode = false;
    this.ingredientForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
