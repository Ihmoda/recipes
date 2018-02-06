import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {
  product_id: any;
  constructor(private _route: ActivatedRoute, private _dataService: DataService, private _router: Router) {
    this._route.paramMap.subscribe( params => {
      this.product_id = params.get('id');
      console.log(this.product_id);
      this._dataService.deleteProduct(this.product_id);
      this._router.navigateByUrl("products");
  })}

  ngOnInit() {
  }

}
