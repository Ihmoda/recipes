import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Recipe } from '../recipe';
import { Person } from '../person';
import { UserService } from '../user.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  recipe_id: string;
  recipes;
  recipe: Recipe = new Recipe;
  user: Person = new Person;
  ingredient: Ingredient = new Ingredient();
  constructor(private _route: ActivatedRoute, private _dataService: DataService, private _router: Router, private _userService: UserService) {
    this._route.paramMap.subscribe( params => {
      this.recipe_id = params.get('id')
  })}

  ngOnInit() {
    this.user = this._userService.getUser();
    this._dataService.retrieveTask();
    this._dataService.tasks.subscribe(
      (recipes) => {this.recipes = recipes
      if (recipes){
        for(var i in recipes){
          if(recipes[i]['_id'] == this.recipe_id){
            this.recipe['name'] = recipes[i]['name']
            this.recipe['chef'] = recipes[i]['chef']
            this.recipe['rating'] = recipes[i]['rating']
            this.recipe['ingredients'] = recipes[i]['ingredients']
          }
        }
      }
      }
    );
  }

  addIngredient(){
    this._dataService.addIngredient(this.recipe_id, this.ingredient);
  }

  viewRecipe(){
    console.log('view');
    this._router.navigateByUrl('all/recipe/' + this.recipe_id)
  }

}
