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

  constructor(private router:Router, private http: HttpService, private useInfo: UserInfoService, private authService: AuthserviceService) { }

  ngOnInit() {

   
    this.userName = this.useInfo.getInfo();

    this.flag = !this.authService.isTokenExpired();

    this.http.getCourseCategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory=res.entity;
    })
  }

  toLogin(){
    this.router.navigate(['/login']);
  }

  toCoursePage(){
    this.router.navigate(['/courses']);
  }

}
