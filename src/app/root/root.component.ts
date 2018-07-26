import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { UserInfoService } from '../services/userInfo/user-info.service';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  @ViewChild('dropdown') dropdown:ElementRef;
  @ViewChild('image') dd:ElementRef;
  

  userName:string;
  sizeFlag: boolean;
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

  constructor(private eRef: ElementRef, private router: Router, private userInfo: UserInfoService, private authService: AuthserviceService) {}

  ngOnInit() {

    this.windowSize = window.screen.width

    console.log(this.windowSize);

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
  @HostListener('document:click', ['$event'])
  clickout(event) {
    //console.log(this.eRef.nativeElement.contains(event.target));
    console.log(this.dd.nativeElement.contains(event.target));
  }
}