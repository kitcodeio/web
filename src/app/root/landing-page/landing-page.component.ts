import { Component, OnInit } from '@angular/core';
import '../../../../node_modules/jquery/dist/jquery.min.js';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { UserInfoService } from '../../services/userInfo/user-info.service';
import { AuthserviceService } from '../../services/auth/authservice.service';

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
  loadingFlag:boolean=false;

  constructor(private userInfo: UserInfoService, private router:Router, private http: HttpService, private useInfo: UserInfoService, private authService: AuthserviceService) { }

  ngOnInit() {
    this.populateCatgory(); 
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
    })
  }

}
