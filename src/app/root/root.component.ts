import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { UserInfoService } from '../services/userInfo/user-info.service';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  userName:string;
  sizeFlag: boolean;
  user: any;
  userHide:boolean;
  label: string;
  url: string;

  constructor(private router: Router, private userInfo: UserInfoService, private authService: AuthserviceService) {}

  ngOnInit() {
    if(this.authService.isTokenExpired()){ 
      this.url = '/login'
      this.label = 'Login/Sign Up';
    } else {
      this.user = this.userInfo.getInfo();
      this.url='/root/dashboard';
      this.label = this.user.name;
    }
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.userInfo.token = localStorage.getItem('jwt_token');
    this.router.navigate(['/']);
  }
}