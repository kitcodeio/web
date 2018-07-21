import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { RouterModule, Routes } from '@angular/router';

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
  constructor(private route:ActivatedRoute, private http: HttpService, private scrollbarService: MalihuScrollbarService, private router: Router) { }

  ngOnInit() {
    this.populateCatgory();

    this.route.params.subscribe(params=>{
      this.course_id = params.id;
      this.http.getDataWithId('CourseSection',params.id)
      .subscribe(res=>{
        this.allSections = res.entity;
        console.log('section',this.allSections);
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
	  this.router.navigate(['/profile/'+this.course_id+'/'+s_id+'/'+c_index]);
    console.log('jncskjd');
  }
}
