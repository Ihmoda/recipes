import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product_list: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.retrieveTask();
    this._dataService.tasks.subscribe(
      (products) => this.product_list = products)
      this._dataService.retrieveTask();
  }

}
