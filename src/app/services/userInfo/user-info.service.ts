import { Injectable } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service'
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userDetail;
  token;
  constructor(private authService: AuthserviceService) {
    console.log('info',this.userDetail);
   }

  getInfo(){
    return jwt_decode(this.authService.getToken()).role_type;
  }
}
