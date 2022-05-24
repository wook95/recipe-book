import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private recipeSub: Subscription;

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.recipeSub = this.recipeService.recipeSub
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      },
    );
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }

  onCreateRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
