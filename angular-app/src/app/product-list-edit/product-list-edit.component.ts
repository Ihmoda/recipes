import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list-edit',
  templateUrl: './product-list-edit.component.html',
  styleUrls: ['./product-list-edit.component.css']
})

export class ProductListEditComponent implements OnInit {
  product_id: string;
  product: Product = new Product;
  product_list: any[];

  constructor(private _route: ActivatedRoute, private _dataService: DataService, private _router: Router) {
    this._route.paramMap.subscribe( params => {
      this.product_id = params.get('id')

 })
}
  ngOnInit() {
    this._dataService.retrieveTask();
    this._dataService.tasks.subscribe(
      (products) => {this.product_list = products
      if (products){
        for(var i in products){
          if(products[i]['_id'] == this.product_id){
            this.product['name'] = products[i]['name']
            this.product['price'] = products[i]['price']
            this.product['url'] = products[i]['url']
          }
        }
      }
      }
    );
  }

  editProduct(){
    var new_product = {
      _id: this.product_id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url
    }
    this._dataService.updateProduct(new_product);
    this.product = new Product();
    this._router.navigateByUrl('products')
  }

}
