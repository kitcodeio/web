import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CustomHttpService } from '../custom-http/custom-http.service';
import { AuthserviceService } from '../auth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string;

  getData(model: string): Observable<any> {
    return this.http.get(this.baseUrl+'read/api/'+model)
      .pipe(catchError((error)=>{return of(error);}));
  }
  
  deleteData(model: string, id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'delete/course/'+model+"/"+id)
      .pipe(catchError((error)=>{return of(error);}));
  }

  postData(model: string, data:any): Observable<any> {
    return this.http.post(this.baseUrl+'create/api/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }

  postCourse(model: string, data:any): Observable<any> {
    return this.http.post(this.baseUrl+'create/course/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }
  postsection(model: string, data:any): Observable<any> {
    return this.http.post(this.baseUrl+'create/course/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }

  postchapter(model:string, data:any): Observable<any>{
    return this.http.post(this.baseUrl+'create/course/'+model,data)
    .pipe(catchError((error)=>{return of(error);}))
  }
  postcategory(model:string, data:any): Observable<any>{
    return this.http.post(this.baseUrl+'create/course/'+model,data)
    .pipe(catchError((error)=>{return of(error);}))
  }
  
  putData(model: string, data:any): Observable<any> {
    return this.http.put(this.baseUrl+'update/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }
  
  getDataFromOne(model:string, id:number) {
    return this.http.get(this.baseUrl+'read/course'+model+'/'+id)
      .pipe(catchError((error)=>{return of(error);}));
  }
  getCourse(model: string): Observable<any> {
    return this.http.get(this.baseUrl+'read/'+model)
    .pipe(catchError((error)=>{return of(error);}));
  }
  getCourseSection(model: string, id:number): Observable<any> {
    return this.http.get(this.baseUrl+'read/course/'+model+'/'+id)
    .pipe(catchError((error)=>{return of(error);}));
  }
  getcategory(model:string):Observable<any>{
    return this.http.get(this.baseUrl+'read/course/'+model)
    .pipe(catchError((error)=>{return of(error);}));
  }

  getChapter(model: string, id:number): Observable<any> {
    return this.http.get(this.baseUrl+'read/course/'+model+'/'+id)
    .pipe(catchError((error)=>{return of(error);}));
  }

  getDataWithId(model:string,id:number):Observable<any>{
    return this.http.get(this.baseUrl+'read/course/'+model+'/'+id)
    .pipe(catchError((error)=>{return of(error);}));
  }

  searchCourse(term: string):Observable<any> {
    return this.http.get(this.baseUrl+'search/course?term='+term)
    .pipe(catchError((error)=>{return of(error);}));
  }
 //=======================Container Creation API=======================//
  
  getContainer(id: number):Observable<any>{
	  return this.http.post(this.baseUrl+'create/api/Container', {course_id: id})
	  .pipe(catchError((error)=>{return of(error);}));
  }

  //=======================get one course detail=======================//
  getCoursePurchaseDetails(course_id:number): Observable<any>{
    let url = this.baseUrl+'read/course/one/Course/'+course_id;
    if(!this.auth.isTokenExpired()){
      let user = this.auth.getUserData();
      url = url + '?id='+user.id;
    }
    return this.http.get(url)
    .pipe(catchError((error)=>{return of(error);}));
  }

  subscribeCourse(course_id:number): Observable<any>{
    return this.http.get(this.baseUrl+'course/signup'+'/'+course_id)
    .pipe(catchError((error)=>{return of(error);}));
  }

  constructor(private http:CustomHttpService, private auth: AuthserviceService) {
    let url = window.location.href;
    if(url.includes('localhost')) this.baseUrl = 'https://beta.kitcode.io/';
    else this.baseUrl = '/';
  }
}
