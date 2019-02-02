import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { DataService } from '../../services/data/data.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { AuthserviceService } from '../../services/auth/authservice.service';
import { UserInfoService } from '../../services/userInfo/user-info.service';

declare var $: any;

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent implements OnInit {
  courses: Observable<any[]>;
  private searchTerms = new Subject<string>();

  userName: string;
  flag: boolean = false;
  userRole;
  userHige: boolean;
  loadingFlag: boolean = false;
  url: any;
  name: string;


  allCourseCategory=[]
  allSections=[];
  allChapters=[];
  course_id;
  user;
  constructor(public userInfo: UserInfoService,
              private useInfo: UserInfoService,
              private authService: AuthserviceService, private ds:DataService, private route:ActivatedRoute, private http: HttpService, private scrollbarService: MalihuScrollbarService, private router: Router) { }

  search(term: string): void { this.searchTerms.next(term); }

  acceptApology() {
    localStorage.setItem('apology', 'accepted');
    $('#sorry-message').modal('hide');
  }

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
    if (localStorage.getItem('apology') !== 'accepted' &&
        this.userInfo.getInfo())
      $('#sorry-message').modal({backdrop : 'static', keyboard : false});

    // Search
    this.courses = this.searchTerms.pipe(
        debounceTime(100), distinctUntilChanged(),
        switchMap((term: string) => {
          return new Observable<any>(observer => {
            let arr = []; 
            this.http.search('Tutorial', term).subscribe(res => {
              arr = arr.concat(res);
              observer.next(arr);
            });
            this.http.search('CourseCategory', term).subscribe(res => {
              arr = arr.concat(res);
              observer.next(arr);
            });
          });
        }));

    $('.input-navbar-search').css("display", "none");
    function searchShow() {
      try {
        if ($(window).scrollTop() >= $('.testimonials').offset().top - 215) {
          $('.input-navbar-search').css("display", "inline-flex");
        } else {
          $('.input-navbar-search').hide();
        }
      } catch (err) {
      }
    }

    $(window).scroll(function() { searchShow(); });

    /*$('#body').css("height", function(){
      return $(document).height()-108;
    });*/
    this.populateCatgory();

  }

  ngAfterViewInit() {
    this.scrollbarService.initScrollbar('.scrollPane', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  }

  // Event trigger when add or remove letters in search bar
  onSearchChange(searchValue: string) {
    if (searchValue == '') {
      $('.search-result').hide();
    } else {
      $('.search-result').show();
    }
  }

  takeAction(course): void {
    console.log(typeof course.id);
    if(typeof course.id == 'string') this.router.navigate(['/root/kide/'+course.label+'/'+course.id+'/1']);
    else this.router.navigate(['/root/course/detail/'+course.id]);
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
      this.ds.setCategory(this.allCourseCategory);
    })
  }
}
