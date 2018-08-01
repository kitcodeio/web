import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { UserInfoService } from '../../../services/userInfo/user-info.service'
import { Section } from '../../../models/section';
import { Course } from '../../../models/course';
import { AuthserviceService } from '../../../services/auth/authservice.service';
import { Chapter } from '../../../models/chapter';

import { ToastrService } from 'ngx-toastr'; 
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  allCourseCategory=[]
  allSections=[];
  allChapters=[];
  course_id;
  isAdmin:boolean;
  btnTxt: string = 'Subscribe';
  deleteSectionId:number;
  updateIndex:number;
  subscribeFlag:boolean;
  updateChapterIndex:number;
  updateSectionIndex:number;
  deleteChapterId:number;

  courseDetail: Course = {} as Course;
  section: Section = {} as Section;
  chapter: Chapter = {} as Chapter;

  constructor(private authService: AuthserviceService, private toastrService: ToastrService, private userInfo: UserInfoService, private route:ActivatedRoute, private http: HttpService, private scrollbarService: MalihuScrollbarService, private router: Router) { }

  ngOnInit() {
    
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

    this.populateCatgory();

    this.isAdmin=this.authService.isAdmin();

    this.route.params.subscribe(params=>{
      this.course_id = params.id; 
      this.http.getDataWithId('CourseSection',params.id)
      .subscribe(res=>{
        this.allSections = res.entity;
        console.log(this.allSections);
      })    
    });

    this.http.getCoursePurchaseDetails(this.course_id)
    .subscribe(res=>{
      this.courseDetail = res.entity
      if(this.courseDetail.status == 'purchased'){
        this.btnTxt = 'Subscribed';
      }
    });
  }

  ngAfterViewInit() {
    this.scrollbarService.initScrollbar('.scrollPane', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
    })
  }

  toProfile(s_id, c_index){
    if (this.courseDetail.status == 'purchased')
      this.router.navigate(['/root/kide/'+this.course_id+'/'+s_id+'/'+c_index]);
    else alert('Buy the course first');
  }

  setDeleteSectionId(id){
    this.deleteSectionId = id;
  }

  setDeleteChapter(id){
    this.deleteChapterId = id
  }

  deleteSection(){
    this.http.deleteData('CourseSection', this.deleteSectionId)
    .subscribe(res=>{
      
    })
  }

  setUpdateSection(section: Section,index: number) :void{
    let obj = Object.create(section);
    this.section = obj;
    this.updateIndex = index;
  }

  setUpdateChapter(chapter: Chapter, sectionIndex:number, chapterIndex: number): void{
    let obj = Object.create(chapter);
    this.chapter = obj;
    this.updateSectionIndex = sectionIndex
    this.updateChapterIndex = chapterIndex;
  }

  updateSection(){
  this.http.putData('CourseSection',{
    id:this.section.id,
    data:this.section
}).subscribe(res=>{
  if(res.status===200){
    this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
    this.allSections[this.updateIndex] = this.section;
  }
  else{
    this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
  }
  
    })
  }

  updateChapter(){
    console.log('hi..')
    this.http.putData('CourseChapter',{
      id:this.chapter.id,
      data:this.chapter
  }).subscribe(res=>{
    console.log(res)
    if(res.status===200){
      this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
      this.allSections[this.updateSectionIndex].CourseChapters[this.updateChapterIndex]= this.chapter;
    }
    else{
      this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
    }
    
      })
    }

  deleteChapter(){
    this.http.deleteData('CourseChapter', this.deleteChapterId)
    .subscribe(res=>{ 
      console.log(res);
    })
  }

  subscribe(): void{
    this.subscribeFlag=true;
    this.http.subscribeCourse(this.course_id)
    .subscribe(res=>{
      this.subscribeFlag = false;
      if(res.status===200){
        this.courseDetail.status = 'purchased';
        this.btnTxt = 'Subscribed';
        this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    })
  }
}
