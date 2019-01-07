import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/userInfo/user-info.service';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ViewChild, ElementRef, AfterViewInit, HostListener, HostBinding } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpService } from '../services/http/http.service';
import { ToastrService } from 'ngx-toastr';

declare var $:any;

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

  showForm: boolean = false;
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
  image:string;
  flag:boolean;
  windowSize;
  loginModelFlag: boolean =true;

  url:string;
  tags:string;
  progress: number;
  loader: Function;
  interval: any;
  time: number;
  noRes: boolean;
  btnTxt: string = "Submit Course/Tutorial";

  constructor(private toastrService: ToastrService, private http: HttpService, private eRef: ElementRef, private router: Router, private userInfo: UserInfoService, private authService: AuthserviceService) {}

  //Method for search next string
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.windowSize = window.screen.width
    if(this.authService.isTokenExpired()){ 
      //this.url = '/login'
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
    this.router.navigate(['root/dashboard/list-image']);
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

  toggleCourseForm(): any {
    if (this.flag) return this.router.navigate(['/login']);
    this.showForm = !this.showForm;
    this.btnTxt =  "Submit Course/Tutorial";
    this.url = '';
    this.tags = '';
  }

  resetBtn(): void {
    this.btnTxt =  "Submit Course/Tutorial";
  }

  submitCourse(): void {
    let self =this;
    let regex = /((([A-Za-z]{4,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    let loader = () => {
      if (self.progress >= 50 && self.noRes) {
	clearInterval(self.interval);
        self.time = self.time * 2;
        self.interval = setInterval(self.loader, self.time);
      } else if (self.progress >= 100) {
	self.btnTxt = 'Saved';
	self.url = "";
	self.tags = "";
	self.progress = 0;
        return clearInterval(self.interval)
      };
      self.progress = self.progress + 1;
      $('#myBar').css("width", self.progress + '%');
    };
    if (regex.test(this.url)) {
      this.btnTxt = "Saving";
      this.progress = 1;
      this.time = 10;
      this.noRes = true;
      this.interval = setInterval(loader, this.time);
      this.http.createTutorial({
        link: this.url,
	tags: this.tags
      }).subscribe(res => {
        if (res.statusCode == 201) {
	  clearInterval(this.interval);
          this.noRes = false;
	  this.interval = setInterval(loader, 5);
	}
      });
    } else {
      this.toastrService.error('invalid url','Error',{positionClass:'toast-bottom-right'});
    }
  }


}
