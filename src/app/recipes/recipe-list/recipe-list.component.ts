import {
  Component,
  OnInit,
} from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipesService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // onShowDetail(id: number) {
  //   this.router.navigate(['recipe', id]);
  // }

}
