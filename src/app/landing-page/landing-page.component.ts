import { Component, OnInit } from '@angular/core';
import '../../../node_modules/jquery/dist/jquery.min.js'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  allCourseCategory=[]

  constructor(private router:Router, private http: HttpService) { }

  ngOnInit() {
    this.http.getCourseCategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory=res.entity;
      console.log(this.allCourseCategory);
    })
  }

  toLogin(){
    this.router.navigate(['/login']);
  }

}
