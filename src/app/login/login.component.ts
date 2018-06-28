import { Component, OnInit, NgZone } from '@angular/core';
import { RouterModule, Routes, NavigationEnd } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthserviceService } from '../services/auth/authservice.service';
import { HttpModule, Http } from '@angular/http';
import * as $ from 'jquery';
import { NavigationStart } from '@angular/router';
import { stringify } from '@angular/core/src/util';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag1: boolean;
  flag2: boolean;
  emailLogin: string;
  passwordLogin: string;

  error: string;
  emailReg: string;
  passwordReg: string;
  company: string;
  passwordCon:string;
  constructor(private router: Router, private authService: AuthserviceService, private route: ActivatedRoute, private toastrService: ToastrService) {
  
   }

  ngOnInit() {

    $(function(){
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
    this.router.navigate(['/app/dashboard']);
   }
  
}

login(): void {
  if(this.emailLogin && this.passwordLogin){	  
    if(this.emailLogin.indexOf('@')!==-1 && this.emailLogin.indexOf('.')){
      this.authService.login(this.emailLogin, this.passwordLogin)
        .subscribe(response => { 
          if(response) {	    
            
        this.authService.setToken(response.token);
          window.location.reload();
        //this.router.navigate(['/app/dashboard']);
        
    } else {
      this.error = response.error;
    }
       });
    } else {
      this.toastrService.error('Please enter valid email');
    }
  } else {
    this.toastrService.error('Please enter all fields');
  }
}

  register(): void {
    if(this.passwordCon==this.passwordReg){
      if (this.emailReg && this.company && this.passwordReg) {
        this.authService.register(
          this.company,
          this.emailReg,
          this.passwordReg
        )
          .subscribe(response => {
            if(!response.error) {	    
              this.authService.setToken(response.token);
              window.location.reload();
              //this.router.navigate(['/app/dashboard']);
        
            } else {
              this.error = response.error;
            }
         });
         
      }
      else{
        this.toastrService.error('Please enter all feild');
      }
    }
    else{
      this.toastrService.error('Password does not match');
    }
  }

}
