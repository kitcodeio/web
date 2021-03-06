import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { HttpModule, Http } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
	
  constructor(private http: HttpClient, private url: UrlService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.url.baseUrl+'login', {
      email: email,
      password: password
    }).pipe(
        catchError((err) => {
          return of(err);
        })
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.url.baseUrl+'register', {
      name: name,
      email: email,
      password: password
    }).pipe(
        catchError((err) => {
          return of(err.error);
      })
    );
  }

  getToken(): string {
    return localStorage.getItem('jwt_token');
  }

  setToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
  
  isAdmin(token?: string): boolean {
    token = this.getToken();
    if (!token) return false;
    
    const user = this.getUserData();
    return user.role_type=='admin';
  }

  getUserData(): any {
    let token = this.getToken();
    const decoded = jwt_decode(token);
    return decoded;
  }

  socialLogin(data:object): Observable<any>{
    return this.http.post(this.url.baseUrl+'login/social',data)
    .pipe(
      catchError((err) => {
        return of(err.error);
    })
  );
  }

}
