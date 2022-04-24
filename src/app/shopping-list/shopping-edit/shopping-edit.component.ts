import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;


  constructor(private shoppingListService:ShoppingListService) { }

  onSubmit(event) {
    event.preventDefault();
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    if (ingredientName && ingredientAmount) {
      this.shoppingListService.addIngredients(new Ingredient(ingredientName,ingredientAmount))
    }else {
      window.alert('빈칸을 다 채워주세요.')
    }

  }

}
