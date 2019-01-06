import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { UserInfoService } from '../services/userInfo/user-info.service';
import { Location } from '@angular/common';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import * as jwt_decode from 'jwt-decode';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  //For Social login
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authSocialService: AuthService, private _location:Location, private userInfo: UserInfoService, private router: Router, private authService: AuthserviceService, private route: ActivatedRoute, private toastrService: ToastrService) {
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

    if(!this.authService.isTokenExpired())
   {
    this.router.navigate(['/']);
   }
  
}

login(): void {
  if(this.emailLogin && this.passwordLogin){	  
    if(this.emailLogin.indexOf('@')!==-1 && this.emailLogin.indexOf('.')){
      this.authService.login(this.emailLogin, this.passwordLogin)
        .subscribe(response => { 
          if(response) {	
          if(response.error){
            this.toastrService.error(response.error.error,'Error',{positionClass:'toast-bottom-right'});
          }   
          else{
        this.authService.setToken(response.token);
        this.router.navigate(['root/category']);
          }
        
    } else {
      this.error = response.error;
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
                    $('#confirmation').modal({
                      backdrop: 'static',
                      keyboard: false
                    });
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
  }


  backClicked() {
    this._location.back();
  }

  signInWithGoogle(): void {
    this.authSocialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data=>{
      this.authService.socialLogin(data).subscribe(res=>{
        if(!res.error){
        this.authService.setToken(res.token);
        this.router.navigate(['root/category']);
        }
        else{
          this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
        }
      })
    });
  }
 
  signInWithFB(): void {
    this.authSocialService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data=>{
      this.authService.socialLogin(data).subscribe(res=>{
        if(!res.error){
          this.authService.setToken(res.token);
          this.router.navigate(['root/category']);
          }
          else{
            this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
          }
      })
    });
  }
 
  signOut(): void {
    this.authSocialService.signOut();
  }
}
