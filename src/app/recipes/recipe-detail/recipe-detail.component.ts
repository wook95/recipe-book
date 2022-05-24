import {
  Component,
  OnInit,
} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  paramsId: number;

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.paramsId = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.paramsId);
      },
    );
  }

  onAddShoppingList() {
    this.recipeService.addIngredientToList(this.recipe.ingredients);

  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.paramsId);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
