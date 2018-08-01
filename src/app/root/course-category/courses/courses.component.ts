import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../../../services/userInfo/user-info.service'
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { AuthserviceService } from '../../../services/auth/authservice.service'

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

  constructor(private authService: AuthserviceService, private toastrService: ToastrService, private eleRef:ElementRef, private userInfo: UserInfoService, private route: ActivatedRoute,private router: Router, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    //this.populateCatgory();
    //this.populateImages()
    this.user=this.authService.isAdmin();

    this.route.params.subscribe(params=>{
      console.log(params.id);
      this.http.getDataWithId('Course',params.id)
      .subscribe(res=>{
          this.allCourses = res.entity;
          console.log(this.allCourses);        
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


  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
    });
  }

  populateImages(){
    this.http.getData('Image').subscribe(res=>{
      this.allImages = res.entity;
    })
  }
  setDeleteCourseId(id: number): void{
    this.deleteCourseId = id;
  }

  setUpdateCourse(course: Course,index:number): void {
    let obj = Object.create(course);
    this.course = obj;
    this.updateIndex = index;
  }

}