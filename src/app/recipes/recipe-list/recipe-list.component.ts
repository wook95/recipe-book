import {
  Component,
  OnInit,
} from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

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
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onCreateRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
