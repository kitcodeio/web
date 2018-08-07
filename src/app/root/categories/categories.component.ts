import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { UserInfoService } from '../../services/userInfo/user-info.service';
import { AuthserviceService } from '../../services/auth/authservice.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  courses: Observable<any[]>;
  private searchTerms = new Subject<string>();

  allCourseCategory=[];
  userName:string;
  flag:boolean=false;
  userRole;
  userHige:boolean;
  loadingFlag:boolean=false;
  url:any;


  constructor(private userInfo: UserInfoService, private router:Router, private http: HttpService, private useInfo: UserInfoService, private authService: AuthserviceService) { }

  ngOnInit() {
    this.populateCatgory();
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
      console.log(this.allCourseCategory);
    })
  }
}
