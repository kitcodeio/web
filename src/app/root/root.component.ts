import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { UserInfoService } from '../services/userInfo/user-info.service';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  @ViewChild('dropdown') dropdown:ElementRef;
  userName:string;
  sizeFlag: boolean;
  user: any;
  userHide:boolean;
  label: string;
  url: string;
  image:string;
  flag:boolean;

  constructor(private router: Router, private userInfo: UserInfoService, private authService: AuthserviceService) {}

  ngOnInit() {

    $(document).ready(function(){
      // Show hide popover
      $(".dropdown").click(function(){
          $(this).find(".dropdown-menu").slideToggle("fast");
      });
  });
  $(document).on("click", function(event){
      var $trigger = $(".dropdown");
      // if($trigger !== event.target && !$trigger.has(event.target).length){
      //     $(".dropdown-menu").slideUp("fast");
      //}            
  });

    if(this.authService.isTokenExpired()){ 
      this.url = '/login'
      this.label = 'Login/Sign Up';
      this.flag=true
    } else {
      this.user = this.userInfo.getInfo();
      // this.url='/root/dashboard';
      this.label = this.user.name;
    }
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.userInfo.token = localStorage.getItem('jwt_token');
    this.router.navigate(['/root/category']);
    this.flag = true;
  }

  profileDropdown(){
    this.dropdown.nativeElement.classList.toggle("show");
  }
}