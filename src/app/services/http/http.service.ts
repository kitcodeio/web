import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CustomHttpService } from '../custom-http/custom-http.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

	baseUrl = 'http://kitcode.io/';

  getData(model: string): Observable<any> {
    return this.http.get(this.baseUrl+'read/'+model)
      .pipe(catchError((error)=>{return of(error);}));
  }
  
  deleteData(model: string, id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'delete/'+model+"/"+id)
      .pipe(catchError((error)=>{return of(error);}));
  }

  postData(model: string, data:any): Observable<any> {
    console.log('main aab custom http ko bhejunga');
    console.log(this.baseUrl+'create/'+model);
    return this.http.post(this.baseUrl+'create/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }
  
  putData(model: string, data:any): Observable<any> {
    return this.http.put(this.baseUrl+'update/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }
  
  getDataFromOne(model:string, id:number) {
    return this.http.get(this.baseUrl+'read/'+model+'/'+id)
      .pipe(catchError((error)=>{return of(error);}));
  }
  constructor(private http:CustomHttpService) { }
}
