import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() ingredientsState = new EventEmitter<Ingredient>();

  constructor() { }

  onSubmit(event) {
    event.preventDefault();
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    if (ingredientName && ingredientAmount) {
      this.ingredientsState.emit(new Ingredient(ingredientName,ingredientAmount));
    }else {
      window.alert('빈칸을 다 채워주세요.')
    }

  }

}
