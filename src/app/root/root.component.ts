import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/userInfo/user-info.service';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ViewChild, ElementRef, AfterViewInit, HostListener, HostBinding } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  @ViewChild('dropdown') dropdown:ElementRef;
  @ViewChild('image') dd:ElementRef;
  @ViewChild('searchResult') searchResult: ElementRef;
  courses: Observable<any[]>;
  private searchTerms = new Subject<string>();

  userName:string;
  sizeFlag: boolean;
  dropdownFlag:boolean;
  user: any={
    name:'',
    image:'',
    role_type:''
  };
  userHide:boolean;
  label: string;
  url: string;
  image:string;
  flag:boolean;
  windowSize;
  private isOpen: boolean =false;

  constructor(private http: HttpService, private eRef: ElementRef, private router: Router, private userInfo: UserInfoService, private authService: AuthserviceService) {}

  //Method for search next string
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {

    this.windowSize = window.screen.width
    if(this.authService.isTokenExpired()){ 
      this.url = '/login'
      this.label = 'Login/Sign Up';
      this.flag=true
    } else {
      this.user = this.userInfo.getInfo();
      this.label = this.user.name;
    }

    //Search
    this.courses = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.http.searchCourse(term))
    );
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.userInfo.token = localStorage.getItem('jwt_token');
    this.router.navigate(['/root/category']);
    this.flag = true;
    $('.dropdown-menu').hide();
  }

  toDashboard(){
    this.router.navigate(['root/dashboard']);
    $('.dropdown-menu').hide();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    try{
    if(this.dd.nativeElement.contains(event.target)) $('.dropdown-menu').css("display","inline");
    else $('.dropdown-menu').hide();

    if(!this.searchResult.nativeElement.contains(event.target))
    $('.search-result').hide();
    }
    catch(err){}
  }

  

  //Event trigger when add or remove letters in search bar
  onSearchChange(searchValue : string ) {  
    if(searchValue==''){
      $('.search-result').hide();
    }
    else{
      $('.search-result').show();
    }
  }

  hideOnClick(){
    $('.search-result').hide();
  }
}