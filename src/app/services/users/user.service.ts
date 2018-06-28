import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

const token = localStorage.getItem('jwt_token');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;

  user:{
    name:string,
    email:string,
  };
  constructor() { 
    this.token = jwt_decode(token); 
  }

  getToken(): any{
  //this.user.name = this.token.name;
  //this.user.email = this.token.email;
  return this.token;
  }
}
