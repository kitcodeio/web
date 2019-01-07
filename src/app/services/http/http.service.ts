import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CustomHttpService } from '../custom-http/custom-http.service';
import { AuthserviceService } from '../auth/authservice.service';
import { UrlService } from '../url/url.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getData(model: string, pageNo?:number): Observable<any> {
    let url = this.url.baseUrl+'read/api/'+model;
    url = (pageNo)?url+'?page='+pageNo:url;
    return this.http.get(url)
      .pipe(catchError((error)=>{return of(error);}));
  }
  
  deleteData(model: string, id: number): Observable<any> {
    return this.http.delete(this.url.baseUrl+'delete/course/'+model+"/"+id)
      .pipe(catchError((error)=>{return of(error);}));
  }

  postData(model: string, data:any): Observable<any> {
    return this.http.post(this.url.baseUrl+'create/api/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }

  postCourse(model: string, data:any): Observable<any> {
    return this.http.post(this.url.baseUrl+'create/course/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }
  postsection(model: string, data:any): Observable<any> {
    return this.http.post(this.url.baseUrl+'create/course/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }

  postchapter(model:string, data:any): Observable<any>{
    return this.http.post(this.url.baseUrl+'create/course/'+model,data)
    .pipe(catchError((error)=>{return of(error);}))
  }
  postcategory(model:string, data:any): Observable<any>{
    return this.http.post(this.url.baseUrl+'create/course/'+model,data)
    .pipe(catchError((error)=>{return of(error);}))
  }
  
  putData(model: string, data:any): Observable<any> {
    return this.http.put(this.url.baseUrl+'update/'+model,data)
      .pipe(catchError((error)=>{return of(error);}));
  }
  
  getDataFromOne(model:string, id:number) {
    return this.http.get(this.url.baseUrl+'read/course'+model+'/'+id)
      .pipe(catchError((error)=>{return of(error);}));
  }
  getCourse(model: string): Observable<any> {
    return this.http.get(this.url.baseUrl+'read/'+model)
    .pipe(catchError((error)=>{return of(error);}));
  }
  getCourseSection(model: string, id:number): Observable<any> {
    return this.http.get(this.url.baseUrl+'read/course/'+model+'/'+id)
    .pipe(catchError((error)=>{return of(error);}));
  }
  getcategory(model:string):Observable<any>{
    return this.http.get(this.url.baseUrl+'read/course/'+model)
    .pipe(catchError((error)=>{return of(error);}));
  }

  getChapter(model: string, id:number): Observable<any> {
    return this.http.get(this.url.baseUrl+'read/course/'+model+'/'+id)
    .pipe(catchError((error)=>{return of(error);}));
  }

  getDataWithId(model:string,id:any):Observable<any>{
    return this.http.get(this.url.baseUrl+'read/course/'+model+'/'+id)
    .pipe(catchError((error)=>{return of(error);}));
  }

  searchCourse(term: string):Observable<any> {
    
    return this.http.get(this.url.baseUrl+'search/course/Course?term='+term)
    .pipe(catchError((error)=>{return of(error);}));
  }
  
  getContainer(id: number):Observable<any>{
    return this.http.post(this.url.baseUrl+'create/api/Container', {course_id: id})
      .pipe(catchError((error)=>{return of(error);}));
  }

  getCoursePurchaseDetails(course_id:number): Observable<any>{
    let url = this.url.baseUrl+'read/course/one/Course/'+course_id;
    if(!this.auth.isTokenExpired()){
      let user = this.auth.getUserData();
      url = url + '?id='+user.id;
    }
    return this.http.get(url)
    .pipe(catchError((error)=>{return of(error);}));
  }

  subscribeCourse(course_id:number): Observable<any>{
    return this.http.get(this.url.baseUrl+'course/signup'+'/'+course_id)
    .pipe(catchError((error)=>{return of(error);}));
  }
  
  readContainer(by?: string, id?: string): Observable<any>{
    let url = 'read/api/Container' + ((by)?`?by=${by}&id=${id}`:'');
    return this.http.get(this.url.baseUrl+url)
      .pipe(catchError((error)=>{return of(error);}));
  };

  verifyToken(token): Observable<any>{
    return this.http.get(this.url.baseUrl+'verify?verifyToken='+token)
      .pipe(catchError(error=>of(error)));
  };

  runContainer(id: string): Observable<any>{
    return this.http.get(this.url.baseUrl+'run/'+id)
      .pipe(catchError(error=>of(error)));
  };

  upload(data: any):  Observable<any>{
    return this.http.post(this.url.baseUrl+'upload', data)
      .pipe(catchError(error=>of(error)));
  };

  getTutorials(): Observable<any>{
    return this.http.get(this.url.baseUrl+'tutorial')
      .pipe(catchError(error=>of(error)));
  };

   createTutorial(data: any): Observable<any>{
    return this.http.post(this.url.baseUrl+'tutorial', data)
      .pipe(catchError(error=>of(error)));
  }; 

 updateTutorial(data: any): Observable<any>{
    return this.http.put(this.url.baseUrl+'approve/tutorial', data)
      .pipe(catchError(error=>of(error)));
  }; 


  constructor(private http:CustomHttpService, private auth: AuthserviceService, private url: UrlService) { }
}
