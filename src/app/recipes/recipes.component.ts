import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('a test recipe','this is simply a test','https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
