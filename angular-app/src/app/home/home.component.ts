import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: "";
  constructor(private _router: Router, private _userService: UserService, private _dataService: DataService) { }

  ngOnInit() {
    
  }

  signIn(){
    console.log(this.user);
    if(this.user.length > 1){
      this._userService.changeUser(this.user);
      this._dataService.retrieveTask();
      this._router.navigateByUrl('all')
    }
  }

}
