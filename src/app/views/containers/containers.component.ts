import { Component, OnInit } from '@angular/core';
//import { ServicesService } from '../../services/services.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  constructor(private routes: Routes) { }

  ngOnInit() {
   
  }

}
