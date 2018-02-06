import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Person } from '../person';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  user: Person = new Person;
  name: string;
  recipe: Recipe = new Recipe;
  constructor(private _userService: UserService, private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this.user = this._userService.getUser();
  }

  logout(){
    this.user = {
      username: '',
    }
    this._userService.changeUser(this.user.username);
    this._router.navigateByUrl('')
  }

  createRecipe(){
    this.recipe.chef = this.user.username;
    this.recipe.name = this.name;
    this.recipe.rating = 0;
    this._dataService.addTask(this.recipe);
    this._router.navigateByUrl('all');
  }

}
