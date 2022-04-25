import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEmptyDetailComponent } from './recipes/recipe-empty-detail/recipe-empty-detail.component';

const routes: Routes = [
  { path:'',redirectTo:'recipe', pathMatch:'full' },
  {
    path:'recipe',
    component:RecipesComponent,
    children: [
      { path: ':id', component:RecipeDetailComponent },
      { path: '**', component:RecipeEmptyDetailComponent }
    ]
  },
  { path:'shop', component:ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
