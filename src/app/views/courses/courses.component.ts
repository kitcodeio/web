import { Component, OnInit } from '@angular/core';
import { all } from 'q';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  flag:boolean= true;
  allCourseCategory=[];
  allCourses=[]
  false:boolean;
  emptyCourse:string;


  constructor(private route: ActivatedRoute,private router: Router, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {

    this.populateCatgory();

    this.route.params.subscribe(params=>{
      this.http.getDataWithId('Course',params.id)
      .subscribe(res=>{
        this.allCourses = res.entity; 
        console.log('course',this.allCourses);
        console.log('i',params.id);
        if(this.allCourses.length>0){
          this.flag=true;
        }
        else{
          this.flag = false;
        }
      });    
    });
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
      console.log(this.allCourseCategory);
    
    })
  }
  
  toLogin(){
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
    this.scrollbarService.initScrollbar('.scrollPane', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  }

  courseDetail(id){
    this.http.getDataWithId('Course',id)
    .subscribe(res=>{
      this.allCourses = res.entity; 
      console.log('course',this.allCourses);
      console.log('i',id);
      if(this.allCourses.length>0){
        this.flag=true;
      }
      else{
        this.flag=false;
      }
    }); 
  }
}
