import { Injectable } from '@angular/core';
import { User } from './model/user';

const KEY_USER = 'angularCRM.user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user?:User;

  constructor() {
    if(sessionStorage.getItem(KEY_USER)){
      this.user = JSON.parse(sessionStorage.getItem(KEY_USER)!);
    }
  }

  authentUser(login:string, password:string):User{
    this.user = {
      id:1,
      login:login,
      firstname:'John',
      lastname:'Doe'
    }
    sessionStorage.setItem(KEY_USER, JSON.stringify(this.user));
    return this.user;
  }

  get authenticated(){
    return this.user !== undefined
  }

  disconnect():void {
    sessionStorage.clear();
    this.user = undefined;
  }
}
