import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { ActivatedRoute } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  allCourseCategory=[]
  allSections=[];
  allChapters=[];

  constructor(private route:ActivatedRoute, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    this.populateCatgory();

    this.route.params.subscribe(params=>{
      this.http.getDataWithId('CourseSection',params.id)
      .subscribe(res=>{
        this.allSections = res.entity;
        console.log('section',this.allSections);
        console.log(params.id);
      })    
    });
  }

  ngAfterViewInit() {
    this.scrollbarService.initScrollbar('.scrollPane', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
      console.log(this.allCourseCategory);
    })
  }

}
