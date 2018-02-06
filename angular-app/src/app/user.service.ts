import { Injectable } from '@angular/core';
import { Product } from './product'
import { Person } from './person'

@Injectable()
export class UserService {
  user: Person = {
    username: ''
  }
  constructor() {
  }

  getUser(){
    return this.user;
  }

  changeUser(user: string){
    this.user.username = user;
  }

}
