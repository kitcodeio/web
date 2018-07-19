import { Component, OnInit } from '@angular/core';
import '../../../node_modules/jquery/dist/jquery.min.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import * as jwt_decode from 'jwt-decode';
import { UserInfoService } from '../services/userInfo/user-info.service';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  allCourseCategory=[];
  userName:string;
  flag:boolean=false;
  userRole;
  userHige:boolean;

  constructor(private userInfo: UserInfoService, private router:Router, private http: HttpService, private useInfo: UserInfoService, private authService: AuthserviceService) { }

  ngOnInit() {
    // this.userRole = this.useInfo.getInfo();
    // if(this.userRole==1){
    //   this.userHige = false;
    // }
    // else if(this.userRole==0){
    //   this.userRole=true;
    // }
    this.populateCatgory();

    this.flag = !this.authService.isTokenExpired();
 
  }

  toLogin(){
    this.router.navigate(['/login']);
  }

  toCoursePage(i){
    this.router.navigate(['/courses']);
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
      console.log(this.allCourseCategory);
    })
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.userInfo.token = localStorage.getItem('jwt_token');
    this.router.navigate(['/login']);
  }

}
