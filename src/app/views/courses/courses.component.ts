import { Component, OnInit } from '@angular/core';
import { all } from 'q';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  flag:boolean= true;
  allCourseCategory=[];


  constructor(private router: Router, private http: HttpService, private scrollbarService: MalihuScrollbarService) { }

  ngOnInit() {

  }
  
  toLogin(){
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
    this.scrollbarService.initScrollbar('.scrollPane', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  }

}
