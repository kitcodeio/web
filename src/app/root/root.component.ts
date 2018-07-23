import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { UserInfoService } from '../services/userInfo/user-info.service';
import * as $ from 'jquery';

//npm install  @types/youtube
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  userName:string;
  sizeFlag: boolean;
  userRole;
  userHide:boolean;
  constructor(private router: Router, private userInfo: UserInfoService) {
  
   }

  ngOnInit() {
    this.userRole = this.userInfo.getInfo();

    // if(this.userRole==1){
    //   this.userHide = false;
    // }
    // else if(this.userRole==0){
    //   this.userHide = true;
    // }
    // if(window.innerWidth<=768){
    //   this.sizeFlag =true;
    // }

  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.userInfo.token = localStorage.getItem('jwt_token');
    this.router.navigate(['/']);
  }
}