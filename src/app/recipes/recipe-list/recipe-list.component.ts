import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() recipeState = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenRecipe(target:Recipe) {
    this.recipeState.emit(target);
  }
}
