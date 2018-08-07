import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/userInfo/user-info.service';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ViewChild, ElementRef, AfterViewInit, HostListener, HostBinding } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpService } from '../services/http/http.service';
import { ToastrService } from 'ngx-toastr';

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

  emailLogin: string;
  passwordLogin: string;

  error: string;
  emailReg: string;
  passwordReg: string;
  company: string;
  passwordCon:string;
  checked:boolean;
  counter:number=0;
  regex = new RegExp('^([^0-9!$@#$%^&*\(\)-_+=\[\]~`\<\>,.?\/\'";\{\}|\\]*)$');

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
  loginModelFlag: boolean =true;

  constructor(private toastrService: ToastrService, private http: HttpService, private eRef: ElementRef, private router: Router, private userInfo: UserInfoService, private authService: AuthserviceService) {}

  //Method for search next string
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {

    $(function(){
      		
      $(document).on('focusout','.md-form-control',function(){	
        $(this).each(function(){
          ($(this).val()!="")?$(this).parent('.md-input').find('label').animate({top:'-15px'},300):$(this).parent('.md-input').find('label').animate({top:'10px'},300);
        });
      });
      
      
      $(document).on('focus','.md-form-control',function(){	
        $(this).each(function(){
          $(this).parent('.md-input').find('label').animate({top:'-15px'},300);
        });
      });
            $(document).on('click','.login-register-button',function(e){
              e.preventDefault();
              $('.login-container').fadeOut(200,function(){
                $('.register-container').fadeIn(200);		
              }); 
            });
            $(document).on('click','.login-sign-button',function(e){
              e.preventDefault();
              $('.register-container').fadeOut(200,function(){
                $('.login-container').fadeIn(200);
              });
            });
          });
      

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


  login(): void {
    if(this.emailLogin && this.passwordLogin){	  
      if(this.emailLogin.indexOf('@')!==-1 && this.emailLogin.indexOf('.')){
        this.authService.login(this.emailLogin, this.passwordLogin)
          .subscribe(response => { 
              
            if(response.error){
              this.toastrService.error('incorrect password','Error',{positionClass:'toast-bottom-right'});
            }   
            else{
              this.authService.setToken(response.token);
              window.location.reload();
            }
         });
      } else {
        this.toastrService.error('Please enter valid email','Error',{positionClass:'toast-bottom-right'});
      }
    } else {
      this.toastrService.error('Please enter all fields','Error', {positionClass:'toast-bottom-right'});
    }
  }
  
  
    register(): void {
      if(this.emailReg && this.company && this.passwordReg && this.passwordCon){
        if(this.passwordCon==this.passwordReg){
          if (this.passwordReg.length>=6) {
            if(this.emailReg.indexOf('@')!==-1 && this.emailReg.indexOf('.')){
    
              if(this.checked){
    
                this.authService.register(
                  this.company,
                  this.emailReg,
                  this.passwordReg
                )
                  .subscribe(response => {
                    if(!response.error) {
                      this.emailLogin = this.emailReg;
                      this.passwordLogin = this.passwordReg;
                      this.loginModelFlag=false;
                      this.login();
                    } else {
                      this.error = response.error;
                      this.toastrService.error(response.error,'Error',{positionClass:'toast-bottom-right'});
                    }
                 });  
              } 
              else{
                this.toastrService.info('You did not agree to the terms and conditions','Error',{positionClass:'toast-bottom-right'});
              }  
            }   
          }
          else{
            this.toastrService.error('Password is too Short ','Error',{positionClass:'toast-bottom-right'});
          }
        }
        else{
          this.toastrService.error('Password does not match','Error',{positionClass:'toast-bottom-right'});
        }
      }
      else{
        this.toastrService.error('Please enter all feild','Error',{positionClass:'toast-bottom-right'});
      }
    }
  
    checkBox(enent){
      this.counter++;
      if(this.counter%2==1){
        this.checked= true;
      }
      else{
        this.checked=false;
      }
      console.log(this.counter);
    }

}