import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './model/user';

const KEY_USER = 'angularCRM.user'
const KEY_JWT = 'angularCRM.JWT';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user?:User;
  private jwt?:string;
  constructor(private http:HttpClient) {
    if(sessionStorage.getItem(KEY_USER)){
      this.user = JSON.parse(sessionStorage.getItem(KEY_USER)!);
      this.jwt = sessionStorage.getItem(KEY_JWT)!;
    }
  }

  authentUser(login:string, password:string):Observable<User>{
    return this.http.post<AuthentResponse>('/api/auth/login', {email:login, password:password}).pipe(
      map((response:AuthentResponse)=>{
        this.user = response.user;
        this.jwt = response.token;
        sessionStorage.setItem(KEY_USER, JSON.stringify(this.user));
        sessionStorage.setItem(KEY_JWT, this.jwt);
        return this.user;
      })
    )
  }

  get token():string|undefined{
    return this.jwt;
  }

  get authenticated():boolean{
    return this.user !== undefined
  }

  disconnect():void {
    sessionStorage.clear();
    this.user = undefined;
    this.jwt = undefined;
  }
}

interface AuthentResponse {
  user:User,
  token:string
}
