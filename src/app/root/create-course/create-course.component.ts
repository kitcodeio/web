import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  secId;
  allSection=[];
  allChapter=[];
  defaultSectionName='a';
  defaultChapterName;
  sectionDescription;
  defaultCourseName;
  courseName;
  sectionName;
  sectionIndex:number;
  chapterId;
  chapId;
  chapterName;
  chapterDescription;
  courseDescription;
  chapterUrl:string;
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
  chapters=[];
  sectionButtonFlag:boolean;

  constructor(private http: HttpService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.defaultCourseName='New Course';
    this.defaultSectionName = 'New Section';
    this.chapterUrl='chapterUrl';
    this.sectionDescription= 'Section Description'
    this.populateImage();
    this.populateCatgory();
    this.sectionButtonFlag=false;
  }

  chapterForm(i){
    this.chapterUrl='';
    this.defaultChapterName ='New Chapter';
    this.chapterFlag=true;
    this.sectionFlag=false;
    this.chapterFlag2=true;
    this.index=i;
    this.chapterName = 'New Chapter';
    if(this.sectionId){
      this.http.postchapter('CourseChapter',{
        "section_id": this.sectionId,
        "label": this.defaultChapterName,  
        "url": this.chapterUrl
    }).subscribe(res=>{
      this.allSection[i].chapters.push(res.entity);
      this.indexOfChapter=null;
      this.highlight('#'+i+(this.allSection[i].chapters.length - 1));
    })
  }
  else{
    this.toastrService.info('Create the section first','Error',{positionClass:'toast-bottom-right'});
  }
}

  sectionForm(){
    this.sectionFlag=true;
    this.chapterFlag=false;
    this.chapterFlag1= true;
    this.secId=null;
    if(this.courseId){
    this.http.postsection('CourseSection',{
      "course_id":this.courseId,
      "label":this.defaultSectionName,
      "description":this.sectionDescription 
  }).subscribe(res=>{
    this.sectionName= res.entity.label;
    this.sectionId=res.entity.id;
    this.allSection.push({section:res.entity, chapters: []});
    this.highlight('#'+(this.allSection.length-1));
  })
 }
else{
  this.toastrService.info('Create a course first','Error',{positionClass:'toast-bottom-right'});
}

    // start from last index
    this.indexOfChapter = null;
    this.sectionDescription='';
    this.sectionIndex=null;
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
          this.sectionButtonFlag=true;
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
    let id;
    if(this.courseId){
      if(!this.secId){
        id = this.allSection[this.allSection.length-1].section.id;
      }
      else{
        id = this.secId;
      }
      this.http.putData('CourseSection',{
        "id":id,
        "data":{
        "label":this.sectionName,
        "description":this.sectionDescription 
        }
    }).subscribe(res=>{

      let obj; // change the name in dom

      if(!this.sectionIndex && this.sectionIndex!=0 && this.indexOfSection==null){
        obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
        this.allSection[this.allSection.length-1].section.label=obj.name;
        this.allSection[this.allSection.length-1].section.description=obj.description;
      }
      else if(this.sectionIndex || this.sectionIndex==0)
      {
        obj={name:this.sectionName,description:this.sectionDescription,course:this.selectCourse}
        this.allSection[this.sectionIndex].section.label=obj.name;
        this.allSection[this.sectionIndex].section.description=obj.description;
      }
      if(res.status == 200){
        this.populateCatgory();
        this.toastrService.success('updated successfully','Success',{positionClass:'toast-bottom-right'});
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
    
    id = null;
    this.indexOfSection=null;
}
  
  addChapter(){
    let obj;
    let id;
    if(this.sectionId){

      if(!this.chapId){
        let len = this.allSection[this.index].chapters.length-1;
        id = this.allSection[this.index].chapters[len].id;
      }
      else{
        id = this.chapId;
      }
      this.http.putData('CourseChapter',{
        "id":id,
        "data":{
          "label": this.chapterName,  
          "url": this.chapterUrl
        }
    }).subscribe(res=>{
      if(!this.indexOfChapter && this.indexOfChapter!=0){
        let len = this.allSection[this.index].chapters.length-1;
        obj = {name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl, section:this.selectSection}
        this.allSection[this.index].chapters[len].label=obj.name;
        this.allSection[this.index].chapters[len].url=obj.chapterUrl;
      }
      else if(this.indexOfChapter || this.indexOfChapter==0)
      {
        obj = {name:this.chapterName,description:this.chapterDescription, chapterUrl:this.chapterUrl,  section:this.selectSection}
        this.allSection[this.indexOfSection].chapters[this.indexOfChapter].label=obj.name;
        this.allSection[this.indexOfSection].chapters[this.indexOfChapter].url=obj.chapterUrl;
      }
      if(res.status==200){
       this.toastrService.success('updated successfully','Success',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
   
      this.chapterUrl = '';
      this.chapId=null;
    })
  }
  else{
    this.toastrService.info('Create the section first','Error',{positionClass:'toast-bottom-right'});
  }

  }

  getSectionId(i,s){
    this.sectionFlag=true;
    this.chapterFlag=false;
    this.sectionIndex=i;
    this.secId=s.id;
    this.sectionName=s.label;
    this.sectionDescription=s.description;
    this.highlight('#'+i);
  }

  getChapterId(i,j,c){
    this.chapterName='';
    this.chapterUrl='';
    this.chapterFlag=true;
    this.sectionFlag=false;
    this.indexOfChapter=j;
    this.indexOfSection=i;
    this.chapId = c.id;
    this.chapterName = c.label;
    this.chapterUrl = c.url;
    this.highlight('#'+i+j);
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

  highlight(id: string): void {
    setTimeout(()=>{
      $('.selected').removeClass('selected');
      $(id).addClass('selected');
    });
  }
}
