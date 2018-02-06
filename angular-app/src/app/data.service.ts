import { Injectable } from '@angular/core';
import { Product } from './product'
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class DataService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  
  constructor(private _http: HttpClient) {
    this.retrieveTask();
  }

  retrieveTask() {
    console.log("hit retrieve");
    this._http.get('/recipes').subscribe(
      (data: any[]) => { this.tasks.next(data)}
    )
  }

  addTask(new_product: Recipe) {
    console.log("hit add recipe");
    this._http.post('/add', new_product).subscribe(
      (data: any[]) => { this.tasks.next(data) }
    )
  }

  deleteProduct(id: any) {
    console.log('Inside DataService : ', id);
    this._http.delete('http://localhost:8000/products/' + id).subscribe(
      (data: any[]) => { this.tasks.next(data) }
    )
  }

  retrieveProduct(id: string) {
    this._http.get('http://localhost:8000/products/'+id).subscribe(
      (data: any[]) => { this.tasks.next(data)}
    )
  }

  updateProduct(recipe: any){
    this._http.put('/recipes/'+ recipe._id, recipe).subscribe(
      (data: any[]) => { this.tasks.next(data)}
    )
  }

  addIngredient(id, new_ingredient) {
    console.log("hit add ingredient FOR SURE");
    console.log(id);
    console.log(new_ingredient);
    this._http.post('/ingredient/'+id, new_ingredient).subscribe(
      (data: any[]) => { this.tasks.next(data) }
    )
  }

  //this._http.get('http://localhost:8000/tasks').subscribe( /*...*/ );
  //this._http.post('http://localhost:8000/tasks', task).subscribe( /*...*/ );
  
}
