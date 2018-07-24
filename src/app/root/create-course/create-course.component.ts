import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { flatten } from '@angular/compiler';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'

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
  
  sectionFlag:boolean=false;
  chapterFlag:boolean=false;
  chapterFlag1:boolean=false;
  chapterFlag2:boolean=false;

  allSection=[];
  allChapter=[];
  defaultSectionName;
  defaultChapterName;
  sectionDescription;
  defaultCourseName;
  courseName;
  sectionName;
  sectionIndex:number;
  chapterId;
  chapterName;
  chapterDescription;
  courseDescription;
  chapterUrl;
  index;
  categories=[];
  allImages=[];
  obj={};
  catId;
  imageId;
  imageFlag:boolean;
  courseId:number=null;
  sectionId;
  indexOfChapter;
  indexOfSection;
  flag:boolean=false;
  creared_by:string;
  constructor(private http: HttpService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.defaultCourseName='New Course';
    this.defaultSectionName = 'New Section';

    this.populateImage();
    this.populateCatgory();
  }

  chapterForm(i){
    this.defaultChapterName ='New Chapter';
    this.chapterFlag=true;
    this.sectionFlag=false;
    this.chapterFlag2=true;
    this.allSection[i].chapters.push({name:this.defaultChapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection});
    this.index=i;
    this.chapterName = 'New Chapter';
  }

  sectionForm(){
    this.sectionFlag=true;
    this.chapterFlag=false;
    this.chapterFlag1= true;
    this.allSection.push({name:this.defaultSectionName,description:this.sectionDescription,course:this.selectCourse, chapters: []});
  
    // start from last index
    this.indexOfChapter = null;
  }

  courseForm(){
    this.chapterFlag=false;
    this.sectionFlag=false;
  }

  addCourse(){
    this.defaultCourseName=this.courseName;
      
    //Get Category Id
      this.categories.forEach(el => {
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

      if(this.courseName && this.imageName.nativeElement.value && this.catName.nativeElement.value && this.courseDescription){

      this.http.postCourse('Course',{
        'category_id':this.catId,
        'label':this.courseName,
        'description':this.courseDescription,
        'image_id':this.imageId,
        'created_by':this.creared_by
      }).subscribe(res =>{
        this.courseName=res.entity.label;
        this.courseId=res.entity.id;
        if(res.status==201){
          this.toastrService.success('Course successfully created','success',{positionClass:'toast-bottom-right'});
        }
        else{
          this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
        }
      })
      }
      else{
        this.toastrService.info('Please select all the fields','Error',{positionClass:'toast-bottom-right'});
      }
    }

  addSection(){

    if(this.courseId){
      this.http.postsection('CourseSection',{
        "course_id":this.courseId,
        "label":this.sectionName,
        "description":this.sectionDescription 
    }).subscribe(res=>{
      this.sectionName= res.entity.label;
      this.sectionId=res.entity.id;
      let obj; // change the name in dom
      if(!this.sectionIndex && this.sectionIndex!=0){
        obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
        this.allSection[this.allSection.length-1].name=obj.name;
      }
      else if(this.sectionIndex || this.sectionIndex==0)
      {
        obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
        this.allSection[this.sectionIndex].name=obj.name;
      }
      if(res.status == 201){
        this.populateCatgory();
        this.toastrService.success('Section successfully created','Success',{positionClass:'toast-bottom-right'});
        this.sectionName='';
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    })
    }
    else{
      this.toastrService.info('Create a course first','Error',{positionClass:'toast-bottom-right'});
    }
  }
  
  addChapter(){
    let obj;
    if(this.sectionId){
      this.http.postchapter('CourseChapter',{
        "section_id": this.sectionId,
        "label": this.chapterName,  
        "url": this.chapterUrl
    }).subscribe(res=>{
      this.chapterName=res.entity.label;
      this.chapterId=res.entity.id;

      if(!this.indexOfChapter && this.indexOfChapter!=0){
        console.log(this.allSection);
        let len = this.allSection[this.index].chapters.length-1;
        obj = {name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl, section:this.selectSection}
        this.allSection[this.index].chapters[len].name=obj.name;
      }
      else if(this.indexOfChapter || this.indexOfChapter==0)
      {
        obj = {name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection}
        this.allSection[this.indexOfSection].chapters[this.indexOfChapter].name=obj.name;
      }
      if(res.status==201){
       this.toastrService.success('Chapter successfully created','Success',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
      this.chapterName = '';
      this.chapterDescription='';
      this.chapterUrl = '';
    })
    }
    else{
      this.toastrService.info('Create the section first','Error',{positionClass:'toast-bottom-right'});
    }

  }

  getSectionId(i){
    this.sectionFlag=true;
    this.chapterFlag=false;
    this.sectionIndex=i;
  }

  getChapterId(i,j){
    this.chapterFlag=true;
    this.sectionFlag=false;
    this.indexOfChapter=j;
    this.indexOfSection=i;
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.categories = res.entity;
    })
  }

  populateImage(){
    this.http.getData('Image')
    .subscribe((res) => {
      this.allImages=res.entity;
    })

  }
}
