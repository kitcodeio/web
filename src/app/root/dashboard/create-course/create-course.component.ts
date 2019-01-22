import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import {Course} from '../../../models/course'
import { AuthserviceService } from '../../../services/auth/authservice.service'

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  @ViewChild('labelcat') catlabel: ElementRef;
  @ViewChild('cat') catName: ElementRef;
  @ViewChild('image') imageName: ElementRef;
  @ViewChild('selectCourse') selectCourse: ElementRef;
  @ViewChild('selectSection') selectSection: ElementRef;
  @ViewChild('secForm') secForm: NgForm;
 
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
  courseName:string;
  courseDescription:string;
  createdBy:string;
  imageId:number;
  course_price:number;
  course_discount:number;


  constructor(private authService:AuthserviceService ,private route:ActivatedRoute, private http: HttpService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {

    this.user=this.authService.isAdmin();

    this.populateImage();
    this.populateCatgory();
    this.populateCourseWithCatId();
  }

  populateCourseWithCatId(){
    this.route.params.subscribe(params=>{
      this.http.getDataWithId('Course',params.id)
      .subscribe(res=>{
          this.allCourses = res.entity;
          this.categoryId = params.id;
      });    
    });
  }

  courseDetail(id){
    this.loading = true;
    this.http.getDataWithId('Course',id)
    .subscribe(res=>{
      if(res.statusCode == 200){
        this.loading = false;
        this.allCourses = res.entity.rows;
      }
    }); 
  }

  deleteCourse(){
    this.http.deleteTutorial(this.deleteCourseId)
    .subscribe(res=>{
      console.log(res);
      if(res.statusCode == 200) this.allCourses.splice(this.deletedCourseIndex,1);
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
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    });
  }

  setDeleteCourseId(id: number,index: number): void{
    this.deleteCourseId = id;
    this.deletedCourseIndex= index;
  }

  setUpdateCourse(course: Course,index:number): void {
    this.course = Object.create(course);;
    this.updateIndex = index;
  }
  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
    })
  }

  populateImage(){
    this.http.getData('Image')
    .subscribe((res) => {
      this.allImages=res.rows;
    })

  }

  highlight(id: string): void {
    setTimeout(()=>{
      $('.selected').removeClass('selected');
      $(id).addClass('selected');
    });
  }
  test(){
  }

  addCourse(){
    this.http.postCourse('Course',{
      "category_id": this.categoryId,
      "label":this.courseName,
      "description":this.courseDescription,
      "created_by": this.createdBy,
      "image_id":this.imageName.nativeElement.value,
      "price":this.course_price,
      "discount":this.course_discount
    }).subscribe(res=>{
      this.populateCourseWithCatId();
    })
  }

  toSectionPage(id){
    this.router.navigate(['/root/dashboard/createSection'],{ queryParams: { id: id } })
  }
}
