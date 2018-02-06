import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Recipe } from '../recipe';
import { Person } from '../person';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipe_id: string;
  recipes;
  recipe: Recipe = new Recipe;
  user: Person = new Person;
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

  logout(){
    this.user = {
      username: '',
    }
    this._userService.changeUser(this.user.username);
    this._router.navigateByUrl('')
  }

}
