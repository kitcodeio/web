import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/userInfo/user-info.service'
import { UserInfo } from '../../models/user-info'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: UserInfo;
  constructor(private userInfo: UserInfoService) { }

  ngOnInit() {
    this.user = this.userInfo.getInfo();
  }
}
