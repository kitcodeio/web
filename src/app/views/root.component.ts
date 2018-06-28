import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users/user.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  userName:string;
  
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/login']);
  }

}
