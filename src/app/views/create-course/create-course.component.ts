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
  sectionIndex:number;
  chapterId;
  chapterName;
  chapterDescription;
  chapterUrl;
  index;
  sectionWithChapter=[];
  lastIndex:number=-1;
  obj={};
  constructor(private http: HttpService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.defaultCourseName='New Course';
    this.defaultSectionName = 'New Section';
    this.defaultChapterName ='New Chapter';
  }

  chapterForm(i){
    let chapterArray=[];
    this.chapterFlag=true;
    this.sectionFlag=false;
    this.chapterFlag2=true;
    this.obj[i]={name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection}
	  this.sectionWithChapter.push(this.obj);
    this.allSection[i].chapters.push({name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection});
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
  }

  addSection(){
    let obj;
    if(!this.sectionIndex){
      obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
      this.allSection[this.allSection.length-1]=obj;
    }
    else if(this.sectionIndex)
    {
      obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
      console.log(obj);
      this.allSection[this.sectionIndex]=obj;
    }
  }

  getSectionId(i){
    this.sectionFlag=true;
    this.chapterFlag=false;
    this.sectionIndex=i;
    console.log(i);
  }
}
