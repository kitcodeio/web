import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {
	
  token: string = localStorage.getItem('jwt_token');
	
  httpOptions: any = {
    headers: new HttpHeaders({'Authorization': 'Bearer '+this.token})
  };
  
  refreshToken():void {
    this.token = localStorage.getItem('jwt_token');	
    this.httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer '+this.token})
    };
  }

  get(url: string): Observable<any> {
    this.refreshToken();
    return this.http.get(url, this.httpOptions)
      .pipe(catchError((err)=>{
        return of(err);	  
      }));
  }

  post(url: string, data: any): Observable<any> {
    this.refreshToken();
    return this.http.post<any>(url,data,this.httpOptions)
      .pipe(catchError((err)=>{
        return of(err);	  
      }));
  }

  delete(url: string): Observable<any> {
    this.refreshToken();
    return this.http.delete<any>(url,this.httpOptions)
     .pipe(catchError((err)=>{
        return of(err);	  
      }));
  }

  put(url: string, data: any): Observable<any> {
    this.refreshToken(); 
    return this.http.put<any>(url,data,this.httpOptions)
      .pipe(catchError((err)=>{
        return of(err);	  
      }));
  }

  constructor(private http: HttpClient) { }
}
