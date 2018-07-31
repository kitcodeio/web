import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { UserInfoService } from '../../../services/userInfo/user-info.service'
import { Section } from '../../../models/section';
import { Course } from '../../../models/course';

import { ToastrService } from 'ngx-toastr';

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
  user;
  btnTxt: string = 'Subscribe';
  deleteSectionId:number;
  updateIndex:number;
  subscribeFlag:boolean;

  courseDetail: Course = {} as Course;
  section: Section = {} as Section;

  constructor(private toastrService: ToastrService, private userInfo: UserInfoService, private route:ActivatedRoute, private http: HttpService, private scrollbarService: MalihuScrollbarService, private router: Router) { }

  ngOnInit() {
    this.populateCatgory();
    this.user = this.userInfo.getInfo();

    this.route.params.subscribe(params=>{
      this.course_id = params.id; 
      this.http.getDataWithId('CourseSection',params.id)
      .subscribe(res=>{
        this.allSections = res.entity;
      })    
    });

    this.http.getCoursePurchaseDetails(this.course_id, this.user.id)
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
    else alert('bsdk course khareed pehle');
  }

  setDeleteSectionId(id){
    this.deleteSectionId = id;
  }

  deleteSection(){
    this.http.deleteData('CourseSection', this.deleteSectionId)
    .subscribe(res=>{
      console.log(res);
    })
  }

  setUpdateSection(section: Section,index: number) :void{
    let obj = Object.create(section);
    this.section = obj;
    this.updateIndex = index;
    console.log(index);
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

  console.log(res);
    })
  }

  subscribe(): void{
    this.subscribeFlag=true;
    console.log(this.course_id);
    this.http.subscribeCourse(this.course_id)
    .subscribe(res=>{
      console.log(res);
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
