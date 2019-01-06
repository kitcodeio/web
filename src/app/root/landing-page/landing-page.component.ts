import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {AuthserviceService} from '../../services/auth/authservice.service';
import {HttpService} from '../../services/http/http.service';
import {UserInfoService} from '../../services/userInfo/user-info.service';

declare var $: any;

@Component({
  selector : 'app-landing-page',
  templateUrl : './landing-page.component.html',
  styleUrls : [ './landing-page.component.css' ]
})
export class LandingPageComponent implements OnInit {

  courses: Observable<any[]>;
  private searchTerms = new Subject<string>();

  allCourseCategory = [];
  userName: string;
  flag: boolean = false;
  userRole;
  userHige: boolean;
  loadingFlag: boolean = false;
  url: any;
  name: string;

  constructor(public userInfo: UserInfoService, private router: Router,
              private http: HttpService, private useInfo: UserInfoService,
              private authService: AuthserviceService) {}

  // Push a search term into the observable stream.
  search(term: string): void { this.searchTerms.next(term); }

  acceptApology() {
    localStorage.setItem('apology', 'accepted');
    $('#sorry-message').modal('hide');
  }

  ngOnInit() {
    if (localStorage.getItem('apology') !== 'accepted' &&
        this.userInfo.getInfo())
      $('#sorry-message').modal({backdrop : 'static', keyboard : false});

    // Search
    this.courses = this.searchTerms.pipe(
        debounceTime(100), distinctUntilChanged(),
        switchMap((term: string) => this.http.searchCourse(term)));

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

  populateCatgory() {
    this.http.getcategory('CourseCategory')
        .subscribe(res => { this.allCourseCategory = res.entity; })
  }

  // Event trigger when add or remove letters in search bar
  onSearchChange(searchValue: string) {
    if (searchValue == '') {
      $('.search-result').hide();
    } else {
      $('.search-result').show();
    }
  }
}
