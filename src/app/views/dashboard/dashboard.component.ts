import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from '../../services/users/user.service'
import { RouterModule, Routes } from '@angular/router';
import {Router} from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { viewClassName } from '@angular/compiler';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected: any;
  allImages: any=[];
  id:any;
  imageId:any;

  constructor(private userService: UserService, private router: Router, private http :HttpService,private elementRef: ElementRef) {}
  @ViewChild('ref') ref:ElementRef;

  change(image:any): void{
    this.selected = image;
    console.log(this.selected.id);
  }
  
  ngOnInit() {

    this.http.getData('Image')
    .subscribe((res) => {
      this.allImages=res.entity;
      console.log('image',this.allImages);
    })
    
    $(function(){
    });
    
  }

    //Delete image
    deleteImage(imageId) {
      this.http.deleteData('Image',this.imageId)
      .subscribe((res) => {
        console.log('res');
      })

      console.log('Hi..');
    }
  

  createImage(){

    this.router.navigate(['/app/image']);

  }
}
