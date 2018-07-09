import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { UserInfoService } from '../services/userInfo/user-info.service';

//npm install  @types/youtube
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  userName:string;
  sizeFlag: boolean;
  
  constructor(private router: Router, private userInfo: UserInfoService) {
  
   }

  ngOnInit() {

    if(window.innerWidth<=768){
      this.sizeFlag =true;
    }

  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.userInfo.token = localStorage.getItem('jwt_token');
    console.log(this.userInfo.token);
    this.router.navigate(['/']);
  }
}