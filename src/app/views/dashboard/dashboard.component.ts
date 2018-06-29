import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as $ from 'jquery';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
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
  emptyMessage:string;
  flag:boolean = false;

  constructor(private router: Router, private http :HttpService,private elementRef: ElementRef, private toastrService: ToastrService) {}
  @ViewChild('ref') ref:ElementRef;

  change(image:any): void{
    this.selected = image;
  }

  ngOnInit() {
    this.populateCourses();
    //this.populateImage();

    $(function(){
    });

  }

  // populateImage(){

  //   this.http.getData('Image')
  //   .subscribe((res) => {
  //     this.allImages=res.entity;
  //     if(this.allImages.length==0){
  //       this.emptyMessage='you do not have any image';
  //       this.flag=true;
  //     }
  //   })

  // }

    //Delete image
    deleteImage(imageId) {
      this.http.deleteData('Image',imageId)
      .subscribe((res) => {
        //this.populateImage();
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

  populateCourses(){
      this.http.getCourse('Image')
    .subscribe((res) => {
      this.allImages=res.entity;
      if(this.allImages.length==0){
        this.emptyMessage='you do not have any image';
        this.flag=true;
      }
      console.log(res);
    })

  }
}
