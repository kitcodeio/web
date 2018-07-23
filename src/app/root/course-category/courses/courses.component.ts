import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  loading:boolean= true;
  allCourseCategory=[];
  allCourses;

  constructor(private route: ActivatedRoute,private router: Router, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.http.getDataWithId('Course',params.id)
      .subscribe(res=>{
        console.log(res);
        if(res.status == 200){
          this.loading = false;
          this.allCourses = res.entity;
        }
      });    
    });
  }
  courseDetail(id){
    this.loading = true;
    this.http.getDataWithId('Course',id)
    .subscribe(res=>{
      if(res.status == 200){
        this.loading = false;
        this.allCourses = res.entity;
      }
    }); 
  }
}
