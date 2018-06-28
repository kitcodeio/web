import { Component, OnInit, NgZone } from '@angular/core';
import { RouterModule, Routes, NavigationEnd } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthserviceService } from '../services/auth/authservice.service';
import { HttpModule, Http } from '@angular/http';
import * as $ from 'jquery';
import { NavigationStart } from '@angular/router';
import { stringify } from '@angular/core/src/util';


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
  constructor(private router: Router, private authService: AuthserviceService, private route: ActivatedRoute) {
  
   }

  ngOnInit() {

    $(function(){
      $(document).on('click','.login-register-button',function(e){
        e.preventDefault();
        $('.login-container').fadeOut('slow',function(){
          $('.register-container').fadeIn('slow');		
        });
      });
      $(document).on('click','.login-sign-button',function(e){
        e.preventDefault();
        $('.register-container').fadeOut('slow',function(){
          $('.login-container').fadeIn('slow');
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
        
        console.log('Res',response);
        
    } else {
      this.error = response.error;
    }
       });
    } else {
      this.error = 'Invaild Email format!';
    }
  } else {
    this.error = 'fields are empty';
  }
}

  register(): void {
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
  }

}
