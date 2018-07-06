import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//npm install  @types/youtube
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  userName:string;
  sizeFlag: boolean;
  
  constructor(private router: Router) {
  
   }

  ngOnInit() {

    if(window.innerWidth<=768){
      this.sizeFlag =true;
    }

  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/']);
  }
}