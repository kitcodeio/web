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
  categoryId:number;
  allSections=[];
  courseDetail:any;
  btnTxt: string = 'Subscribe';
  course_id:number;
  subscribeFlag:boolean;
  popup:boolean=false;
  pariceAfterDiscount:any;
  courseDiscount:number;
  coursePrice:number;
  courseStatus:any;
  courseLabel:string;
  courseDis:string;
  courseCreated:any;
  courseUpdatedAt:any;

  constructor(private dataService: DataService, private authService: AuthserviceService, private toastrService: ToastrService, private eleRef:ElementRef, private userInfo: UserInfoService, private route: ActivatedRoute,private router: Router, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {

    this.user=this.authService.isAdmin();

    this.route.params.subscribe(params=>{
      this.http.getDataWithId('Course',params.id)
      .subscribe(res=>{
          this.allCourses = res.entity;
          this.categoryId = params.id;    
        console.log(this.allCourses);
      });    
    });
  }

  toCourseCreation(){
    this.router.navigate(['/root/dashboard/createCourse'],{ queryParams: { id: this.course.id } })
  }

  allCourseDetail(id){
    this.loading = true;
    this.http.getDataWithId('Course',id)
    .subscribe(res=>{
      if(res.statusCode == 200){
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
      if(res.statusCode == 200){
        this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
        this.allCourses[this.updateIndex] = this.course;
      }
      else{
        this.toastrService.error(res.error.error,'Error',{positionClass:'toast-bottom-right'});
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

  populateSection(course_id){
    this.http.getDataWithId('CourseSection',course_id)
    .subscribe(res=>{
      this.allSections = res.entity;
    })   
  }
  getCourse(course_id){
    this.http.getCoursePurchaseDetails(course_id)
    .subscribe(res=>{
      this.courseDetail = res.entity;
      this.pariceAfterDiscount = this.courseDetail.price - this.courseDetail.price*this.courseDetail.discount/100;
      this.courseDiscount = this.courseDetail.discount;
      this.coursePrice = this.courseDetail.price;
      this.courseStatus = this.courseDetail.status;
      this.courseCreated= this.courseDetail.created_by;
      this.courseLabel = this.courseDetail.label;
      this.courseDis = this.courseDetail.description;
      this.courseUpdatedAt = this.courseDetail.updatedAt;
      if(this.courseDetail.status == 'purchased'){
        this.btnTxt = 'Subscribed';
       }
    });
  }

  getCourseId(course){
    this.populateSection(course.id);
    this.getCourse(course.id);
    this.course_id = course.id;
    this.popup=true
  }

  subscribe(): void{
    this.subscribeFlag=true;
    this.http.subscribeCourse(this.course_id)
    .subscribe(res=>{
      this.subscribeFlag = false;
      if(res.statusCode===200){
        this.courseDetail.status = 'purchased';
        this.btnTxt = 'Subscribed';
        this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    })
  }

  toProfile(s_id, c_index){
    if (this.courseDetail.status == 'purchased')
      this.router.navigate(['/root/kide/'+this.course_id+'/'+s_id+'/'+c_index]);
    else alert('Subscribe the course first');
  }

  highlight(id: string): void {
    setTimeout(()=>{
      $('.selected').removeClass('selected');
      $(id).addClass('selected');
    });
  }

}
