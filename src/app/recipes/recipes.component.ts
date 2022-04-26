import {
  Component,
  OnInit,
} from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.recipesService.selectedRecipe
    .subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
  
}
