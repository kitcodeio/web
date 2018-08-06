import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../../../services/userInfo/user-info.service'
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { AuthserviceService } from '../../../services/auth/authservice.service'
import { DataService } from '../../../services/data/data.service'

import { Course } from '../../../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  loading:boolean= true;
  allCourseCategory=[];
  allCourses:Course[] = [];
  user:boolean;
  allImages=[];
  updateIndex: number;
  deleteCourseId: number;
  course: Course = {} as Course;
  deletedCourseIndex:number;

  constructor(private dataService: DataService, private authService: AuthserviceService, private toastrService: ToastrService, private eleRef:ElementRef, private userInfo: UserInfoService, private route: ActivatedRoute,private router: Router, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {

    this.user=this.authService.isAdmin();

    this.route.params.subscribe(params=>{
      this.http.getDataWithId('Course',params.id)
      .subscribe(res=>{
          this.allCourses = res.entity;      
      });    
    });
  }
  courseDetail(id){
    this.loading = true;
    this.http.getDataWithId('Course',id)
    .subscribe(res=>{
      if(res.status == 200){
        this.loading = false;
        this.allCourses = res.entity;
      }
    }); 
  }

  deleteCourse(){
    this.http.deleteData('Course', this.deleteCourseId)
    .subscribe(res=>{
      this.allCourses.splice(this.deletedCourseIndex,1);
    })
  }

  updateCourse(){
    this.http.putData('Course', {
      id: this.course.id,
      data: this.course
    }).subscribe(res=>{
      if(res.status == 200){
        this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
        this.allCourses[this.updateIndex] = this.course;
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    });
  }

  setDeleteCourseId(id: number,index: number): void{
    this.deleteCourseId = id;
    this.deletedCourseIndex= index;
  }

  setUpdateCourse(course: Course,index:number): void {
    this.allCourseCategory = this.dataService.getCategories();
    this.course = Object.create(course);;
    this.updateIndex = index;
  }

}