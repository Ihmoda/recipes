import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  user: Person = new Person();
  recipes: any;
  constructor(private _userService: UserService, private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
    console.log("hit all");
    this.user = this._userService.getUser();
    this._dataService.retrieveTask();
    
    this._dataService.tasks.subscribe(
      (data) => this.recipes = data)
      this._dataService.retrieveTask();
  }

  logout(){
    this.user = {
      username: '',
    }
    this._userService.changeUser(this.user.username);
    this._router.navigateByUrl('')
  }

  new(){
    this._router.navigateByUrl('new')
  }

  like(recipe){
    recipe.rating += 1;
    console.log(recipe);
    this._dataService.updateProduct(recipe);
  }

}
