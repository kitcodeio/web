import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { flatten } from '@angular/compiler';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  @ViewChild('labelcat') catlabel: ElementRef;
  @ViewChild('catId') catName: ElementRef;
  @ViewChild('imageId') imageName: ElementRef;
  @ViewChild('course') courseName: ElementRef;
  @ViewChild('section') sectionName: ElementRef;

  //  catgorylabel = this.catlabel.nativeElement.value;


active: number;
  sectionArray=[];
  allChapter=[];
  allCourses=[];
  allSection=[];
  courseImgID:any;
  courseDis:any;
  SectionDesc:any;
  chapterDes:any;
  chapterName:any;
  chapterUrl:any;
  categories:any=[];
  categoryName:any;
  courseId:any;
 Flag:boolean;
 Flag1:boolean;
 flag:boolean=false;
 flag1:boolean = false;
 index:number;
 secIndex;
 obj={};
 catId:any;
 allImages=[];
 imageId;
 sectionId;
 checkImage

 display:any;
 block:any;
 imageFlag:boolean;

  constructor(private http: HttpService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.Flag=true;
    this.Flag1=true;
    this.getcatgory();
    this.populateImage();
  }
  
  saveCourse(){

    //Get Category Id
    this.categories.forEach(el => {
      if(el.label==this.catName.nativeElement.value){
        this.catId = el.id;
      }
    });

    this.allImages.forEach(el => {
      if(el.label==this.imageName.nativeElement.value){
        this.imageId = el.id;
      }
    });

    this.http.postCourse('Course',{
      'category_id':this.catId,
      'label':this.courseName,
      'description':this.courseDis,
      'image_id':this.imageId
    }).subscribe(res =>{
      console.log(res);
      if(res.status==200){
        this.toastrService.success('Course successfully created','success',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error('Something wrong','Error',{positionClass:'toast-bottom-right'});
      }
    })
  }


  addSection(){
    this.allCourses.forEach(el=>{
      if(el.label==this.courseName.nativeElement.value){
        this.courseId = el.id;
      }
    })
    this.http.postsection('CourseSection',{
        "course_id":this.courseId,
        "label":this.sectionName,
        "description":this.SectionDesc 
    }).subscribe(res=>{
      console.log(res);
      if(res.status == 200){
        this.getcatgory();
        this.toastrService.success('Secton Successfully created','Success',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error('Something is wrong','Error',{positionClass:'toast-bottom-right'});
      }
    })
    console.log(this.courseId);
  }



  addChapter(){
    this.allSection.forEach(el=>{
      if(el.label==this.sectionName.nativeElement.value){
        this.sectionId=el.id;
      }
    })
    this.http.postchapter('CourseChapter',{
        "section_id": this.sectionId,
        "label": this.chapterName,  
        "url": this.chapterUrl
    }).subscribe(res=>{
      console.log(res); 
      if(res.status==200){
        this.toastrService.success('Chapter successfully created','Success',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error('Somrthing is wrong','Error',{positionClass:'toast-bottom-right'});
      }
    })
  }



    getcatgory(){
      this.http.getcategory('CourseCategory').subscribe(res=>{
        this.categories = res.entity;
        //console.log('getres',res.entity);
        //console.log('in',this.catId);
      })
    }


    addCategory(){
      if(this.categoryName){
      this.http.postcategory('CourseCategory',{
        "label":this.categoryName
      }).subscribe(res=>{
        console.log(res);
        if(res.status==200){
          this.toastrService.success('Category succusfully created','Successs',{positionClass:'toast-bottom-right'});
        }
        else{
          this.toastrService.error('Something is wrong','Error',{positionClass:'toast-bottom-right'});
        }
      })
      this.getcatgory();
      }
      else{
        this.toastrService.error('please enter category name','Error',{positionClass:'toast-bottom-right'});
      }
  }

  changeActive(i){
    this.active = i;
  }


  section(i){
    //this.sectionArray.push({'name':this.sectionName,'img':this.SectionDesc});
    this.Flag=false;
    this.Flag1=false;
    //console.log(this.sectionArray);
    //console.log(i);
  }

  showaddcategorymodal(){
   // console.log('yes');
    //$('.addcategory').modal('show');
  }


  getChapter(id){
    this.http.getChapter('CourseSection',id)
    .subscribe(res=>{
      console.log(res);
    })
  }


  populateImage(){
    this.http.getData('Image')
    .subscribe((res) => {

      if(res.entity.length!=0){
        this.imageFlag=false;
      this.allImages=res.entity;
      console.log('full');
      }
      else{
        console.log('emp');
        this.imageFlag=true;
        this.allImages[0]='Create Image';
      }
      console.log(this.allImages);
    })

  }

  getCourse(id){
    this.allCourses=[];
      this.http.getDataWithId('Course',id)
      .subscribe(res=>{
        if(id == id){
          let result = res.entity;
          result.forEach(el=>{
            this.allCourses.push(el);
          })
          console.log(this.allCourses);
          console.log(id)
        }
    })

    this.flag=true;
    this.flag1 = false;
  }

  openModal(){
    this.display=this.block;
 }

 getSection(id){
  this.allSection=[];
  this.allChapter=[];
    this.http.getDataWithId('CourseSection',id)
    .subscribe(res=>{
      if(id == id){
        let result = res.entity;
        result.forEach(el=>{
          this.allSection.push(el);
          this.allChapter.push(el.CourseChapters);
      })
      console.log('section',this.allChapter);
      console.log(id)
    }
  })
  this.flag1 = true;
 }

 courseForm(){
   this.Flag=true;
   this.Flag1=true;
   this.flag=false;
 }

 toImagePage(){
  this.router.navigate(['app/image']);
  console.log('hddsd');
 }
}
