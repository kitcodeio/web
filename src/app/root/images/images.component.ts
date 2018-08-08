import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { HttpService } from '../../services/http/http.service'
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserInfoService } from '../../services/userInfo/user-info.service'


declare var CodeMirror: any;
declare var popover: any;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  selected: any;
  allImages: any=[];
  id:any;
  imageId:any;
  emptyMessage:string;
  flag:boolean = false;
  @Input() lable:string;
  sizeFlag: boolean;
  categoryName;
  categories=[];
  catImageUrl:string;
  regex1 = new RegExp('(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])');

  @ViewChild('cat') catVisibility: ElementRef
  constructor(private userInfo:UserInfoService, private router: Router, private http :HttpService,private elementRef: ElementRef, private toastrService: ToastrService) {

  }
  @ViewChild('ref') ref:ElementRef;

  change(image:any): void{
    this.selected = image;
  }

  ngOnInit() {
    this.populateImage();
    $(function(){
    });

  }

  populateImage(){

    this.http.getData('Image')
    .subscribe((res) => {
      this.allImages=res.entity.rows;
      console.log(res);
      if(this.allImages.length==0){
        this.emptyMessage='you do not have any image';
        this.flag=true;
      }
    })

  }

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
    this.router.navigate(['/root/image']);
  }

  createCourse(){
    this.router.navigate(['/root/createCourse']);
  }

  addCategory(){
    if(this.regex1.test(this.catImageUrl)){  
    if(this.categoryName &&  this.catImageUrl){
      this.http.postcategory('CourseCategory',{
        "label":this.categoryName,
        "logo": this.catImageUrl,
        "visibility":this.catVisibility.nativeElement.value
      }).subscribe(res=>{
        if(res.status==201){
          this.toastrService.success('Category succusfully created','Successs',{positionClass:'toast-bottom-right'});
        }
        else{
          this.toastrService.error('Something is wrong','Error',{positionClass:'toast-bottom-right'});
        }
      })
      this.getcatgory();
      }
      else{
        this.toastrService.error('please enter category name','Error',{positionClass:'toast-bottom-right'});
      }
    }
    else{
      this.toastrService.error('Enter valid url','Error',{positionClass:'toast-bottom-right'});
    }
  }

  getcatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.categories = res.entity;
    })
  }

}
