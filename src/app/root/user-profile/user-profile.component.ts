import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/userInfo/user-info.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:object;
  constructor(private userInfo: UserInfoService) { }

  ngOnInit() {
    this.user = this.userInfo.getInfo();
    
  }

}
