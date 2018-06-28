import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from '../../services/users/user.service'
import { RouterModule, Routes } from '@angular/router';
import {Router} from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { viewClassName } from '@angular/compiler';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

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

  constructor(private userService: UserService, private router: Router, private http :HttpService,private elementRef: ElementRef, private toastrService: ToastrService) {}
  @ViewChild('ref') ref:ElementRef;

  change(image:any): void{
    this.selected = image;
    console.log(this.selected.id);
  }
  
  ngOnInit() {

    this.populateImage();

    $(function(){
    });
    
  }

  populateImage(){

    this.http.getData('Image')
    .subscribe((res) => {
      this.allImages=res.entity;
      console.log('image',this.allImages);
    })

  }

    //Delete image
    deleteImage(imageId) {

      console.log(imageId);
      this.http.deleteData('Image',imageId)
      .subscribe((res) => {
        console.log(res);
        this.populateImage();
        if(res.error){
          this.toastrService.error(res.error);
        }
        else{
          this.toastrService.success(res.message);
        }   
      })
    }
  
  createImage(){

    this.router.navigate(['/app/image']);

  }
}
