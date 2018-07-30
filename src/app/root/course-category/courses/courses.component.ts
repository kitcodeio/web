import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../../../services/userInfo/user-info.service'
import { CourseCategoryComponent } from '../course-category.component'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  loading:boolean= true;
  allCourseCategory=[];
  allCourses = [];
  user;
  allImages=[];
  courseName;
  courseDes;
  createdBy;
  @ViewChild('cat') catName: ElementRef;
  @ViewChild('image') imageName: ElementRef;
  catId;
  imageId;


  constructor(private eleRef:ElementRef, private userInfo: UserInfoService, private route: ActivatedRoute,private router: Router, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {

    this.populateCatgory();
    this.populateImages()

    this.user=this.userInfo.getInfo();
    this.route.params.subscribe(params=>{
      this.http.getDataWithId('Course',params.id)
      .subscribe(res=>{
        if(res.status == 200){
          this.loading = false;
          this.allCourses = res.entity;
          console.log(this.allCourses)
        }
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

  deleteCourse(id){
    console.log('kkk');
    this.http.deleteData('Course',id)
    .subscribe(res=>{
      console.log(res);
    })
  }

  updateCourse(id){

        //Get Category Id
        this.allCourseCategory.forEach(el => {
          if(el.label==this.catName.nativeElement.value){
            this.catId = el.id;
          }
        });
        //Get image id
        this.allImages.forEach(el => {
          if(el.label==this.imageName.nativeElement.value){
            this.imageId = el.id;
          }
        });

    this.http.putData('CourseSection',{
      "id":id,
      "data":{
      "category_id":this.catId,
      "label":this.courseName,
      "description":this.courseDes,
      "image_id":'',
      "created_by":this.imageId
      }
  }).subscribe(res=>{
    console.log(res);
  })
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

  showCourseInfo(course){
    this.courseName = course.label;
    this.courseDes = course.description;
    this.createdBy = course.created_by;
  }
}