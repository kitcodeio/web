import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  @ViewChild('labelcat') catlabel: ElementRef;
  @ViewChild('catId') catName: ElementRef;
  @ViewChild('imageId') imageName: ElementRef;

  //  catgorylabel = this.catlabel.nativeElement.value;


active: number;
  sectionArray=[];
  chapterArray=[];
  allCourses=[];
  courseName:any;
  courseImgID:any;
  courseDis:any;
  SectionDesc:any;
  sectionName:any;
  chapterDis:any;
  chapterName:any;
  Chapter_Url:any;
  categories:any=[];
  categoryname:any;
  courseId:any;
 Flag:boolean;
 Flag1:boolean;
 flag:boolean=false;
 index:number;
 secIndex;
 obj={};
 catId:any;
 allImages=[];
 imageId;

 display:any;
 block:any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.Flag=true;
    this.Flag1=true;
    this.getcatgory();
    this.getChapter();
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
      //console.log(res);
    })
  }


  addSection(){
    this.http.postsection('CourseSection',{
        "course_id":this.courseId,
        "label":this.sectionName,
        "description":this.SectionDesc 
    }).subscribe(res=>{
      console.log(res);
      if(res.status == 200){
        this.getcatgory();
      }
    })
    //console.log('yes ss')
  }



  savechapter(){
    this.http.postchapter('CourseChapter',{
        "section_id": "3",
        "label": this.chapterDis,
        "url": this.Chapter_Url
    
    }).subscribe(res=>{
      //console.log(res);
    })
  }



    getcatgory(){
      this.http.getcategory('CourseCategory').subscribe(res=>{
        this.categories = res.entity;
        //console.log('getres',res.entity);
        //console.log('in',this.catId);
      })
    }


    selectcategory(){
      //console.log('method is workin')
      this.http.postcategory('CourseCategory',{
        "label":this.categoryname
      }).subscribe(res=>{
       // console.log(res);
      })
     //$('.addcategory').modal('hide');

    }
  
  chapter(index){
    this.Flag= false;
    this.Flag= true;

    this.chapterArray.push({'name':this.chapterName,'url':this.Chapter_Url,'dec':this.chapterDis})
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


  getChapter(){
    this.http.getChapter('Course',1).subscribe(res=>{
      //console.log(res);
    })
  }


  populateImage(){
    this.http.getData('Image')
    .subscribe((res) => {
      this.allImages=res.entity;
      //console.log(this.allImages);
    })

  }

  getCourse(id){
    this.allCourses=[];
      this.http.getCourseWithId('Course',id)
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
  }

  getCourseID(i){
    this.courseId = i;
  }

  openModal(i){
    this.display=this.block;
 }
}
