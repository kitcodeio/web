import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent implements OnInit {

  allCourseCategory=[]
  allSections=[];
  allChapters=[];
  course_id;
  user;
  constructor(private ds:DataService, private route:ActivatedRoute, private http: HttpService, private scrollbarService: MalihuScrollbarService, private router: Router) { }

  ngOnInit() {
    this.populateCatgory();

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
  $(function(){
      $('.scrollPane').mCustomScrollbar(
          {
              axis:'y',
              theme:'dark'
          });
  });
  }

  ngAfterViewInit() {
    this.scrollbarService.initScrollbar('.scrollPane', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
      this.ds.setCategory(this.allCourseCategory);
    })
  }
}
