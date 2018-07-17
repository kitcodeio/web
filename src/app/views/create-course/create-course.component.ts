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
  @ViewChild('cat') catName: ElementRef;
  @ViewChild('image') imageName: ElementRef;
  @ViewChild('selectCourse') selectCourse: ElementRef;
  @ViewChild('selectSection') selectSection: ElementRef;
  
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
  sectionIndex:number=-1;
  chapterId;
  chapterName;
  chapterDescription;
  courseDescription;
  chapterUrl;
  index;
  sectionWithChapter=[];
  lastIndex:number=-1;
  categories=[];
  allImages=[];
  obj={};
  catId;
  imageId;
  imageFlag:boolean;
  courseId;
  sectionId;
  indexOfChapter;
  indexOfSection;
  constructor(private http: HttpService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.defaultCourseName='New Course';
    this.defaultSectionName = 'New Section';
    this.defaultChapterName ='New Chapter';

    this.populateImage();
    this.populateCatgory();
  }

  chapterForm(i){
    this.chapterFlag=true;
    this.sectionFlag=false;
    this.chapterFlag2=true;
	  this.sectionWithChapter.push(this.obj);
    this.allSection[i].chapters.push({name:this.defaultChapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection});
    this.index=i;
  }

  sectionForm(){
    this.sectionFlag=true;
    this.chapterFlag=false;
    this.chapterFlag1= true;
    this.allSection.push({name:this.defaultSectionName,description:this.sectionDescription,course:this.selectCourse, chapters: []});
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

      if(this.courseName && this.imageName.nativeElement.value && this.catName.nativeElement.value){

      // this.http.postCourse('Course',{
      //   'category_id':this.catId,
      //   'label':this.courseName,
      //   'description':this.courseDescription,
      //   'image_id':this.imageId
      // }).subscribe(res =>{
      //   console.log(res);
      //   this.defaultCourseName=res.entity.label;
      //   this.courseId=res.entity.id;
      //   if(res.status==200){
      //     this.toastrService.success('Course successfully created','success',{positionClass:'toast-bottom-right'});
      //   }
      //   else{
      //     this.toastrService.error('Something wrong','Error',{positionClass:'toast-bottom-right'});
      //   }
      // })
      }
      else{
        this.toastrService.info('Please select all the fields','Error',{positionClass:'toast-bottom-right'});
      }
    }

  addSection(){
    let obj;
    if(!this.sectionIndex && this.sectionIndex<0){
      obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
      this.allSection[this.allSection.length-1]=obj;
    }
    else if(this.sectionIndex || this.sectionIndex>=0)
    {
      obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
      console.log(obj);
      this.allSection[this.sectionIndex]=obj;
    }

    // this.http.postsection('CourseSection',{
    //     "course_id":this.courseId,
    //     "label":this.sectionName,
    //     "description":this.sectionDescription 
    // }).subscribe(res=>{
    //   console.log(res);
    //   this.defaultSectionName= res.entity.label;
    //   this.sectionId=res.entity.id;
    //   if(res.status == 200){
    //     this.populateCatgory();
    //     this.toastrService.success('Secton Successfully created','Success',{positionClass:'toast-bottom-right'});
    //   }
    //   else{
    //     this.toastrService.error('Something is wrong','Error',{positionClass:'toast-bottom-right'});
    //   }
    // })
    console.log(this.sectionIndex);
  }
  
  addChapter(){
    let obj;
    if(!this.indexOfChapter && this.indexOfChapter<0){
      this.allSection[this.indexOfSection].chapters[this.allSection[this.index].chapters.length-1]={name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection};
    }
    else if(this.indexOfChapter || this.indexOfChapter>=0)
    {
      this.allSection[this.indexOfSection].chapters[this.indexOfChapter]={name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection};
    }
    
    // this.http.postchapter('CourseChapter',{
    //     "section_id": this.sectionId,
    //     "label": this.chapterName,  
    //     "url": this.chapterUrl
    // }).subscribe(res=>{
    //   console.log(res); 
    //   this.defaultChapterName=res.entity.label;
    //   this.chapterId=res.entity.id;
    //   if(res.status==200){
    //     this.toastrService.success('Chapter successfully created','Success',{positionClass:'toast-bottom-right'});
    //   }
    //   else{
    //     this.toastrService.error('Somrthing is wrong','Error',{positionClass:'toast-bottom-right'});
    //   }
    // })
  }

  getSectionId(i){
    this.sectionFlag=true;
    this.chapterFlag=false;
    this.sectionIndex=i;
    console.log(i);
  }

  getChapterId(i,j){
    this.chapterFlag=true;
    this.sectionFlag=false;
    this.indexOfChapter=j;
    this.indexOfSection=i;
    console.log(i);
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.categories = res.entity;
      console.log(this.categories);
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

  getChapter(){
    this.http.getChapter('CourseSection',this.courseId)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
