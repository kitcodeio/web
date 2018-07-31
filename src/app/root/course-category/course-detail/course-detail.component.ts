import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoService } from '../../../services/userInfo/user-info.service'
import { Section } from '../../../models/section';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

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
  deleteSectionId:number;

  section: Section={} as Section;

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
    this.router.navigate(['/root/kide/'+this.course_id+'/'+s_id+'/'+c_index]);
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

  setUpdateSection(section: Section) :void{
    this.section = section;
  }

  updateSection(){
  this.http.putData('CourseSection',{
    id:this.section.id,
    data:this.section
}).subscribe(res=>{
  if(res.status===200){
    this.toastrService.success('update succusfully','Successs',{positionClass:'toast-bottom-right'});
  }
  else{
    this.toastrService.error('Error','Error',{positionClass:'toast-bottom-right'});
  }

  console.log(res);
})
}
}
