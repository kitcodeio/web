import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userDetail;
  token;
  constructor() {
    console.log('info',this.userDetail);
   }

  getInfo(){
    return this.userDetail;
  }
}
