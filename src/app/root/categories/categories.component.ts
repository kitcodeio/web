import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { UserInfoService } from '../../services/userInfo/user-info.service';
import { AuthserviceService } from '../../services/auth/authservice.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  courses: Observable<any[]>;
  private searchTerms = new Subject<string>();

  allCourseCategory=[];
  userName:string;
  flag:boolean=false;
  userRole;
  userHige:boolean;
  loadingFlag:boolean=false;
  url:any;
  categoryName;
  categories=[];
  catImageUrl:string;
  regex1 = new RegExp('(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])');

  @ViewChild('cat') catVisibility: ElementRef
  deletedCategoryId:number;
  updateCategoryId:number;


  constructor(private userInfo: UserInfoService, private router:Router, private http: HttpService, private useInfo: UserInfoService, private authService: AuthserviceService,private toastrService: ToastrService) { }

  ngOnInit() {
    this.populateCatgory();
  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
    })
  }

  deleteCategory(){
    this.http.deleteData('CourseCategory',this.deletedCategoryId)
    .subscribe(res=>{
      this.populateCatgory();
    })
  }

  setDeleteCategory(id){
    this.deletedCategoryId = id;
  }

  setUpdateCategory(cat,id){
    this.categoryName = cat.label;
    this.catImageUrl = cat.logo;
    this.updateCategoryId = cat.id;
  }

  updateCategory(){
    this.http.putData('CourseCategory',{
      id:this.updateCategoryId,
      data:{
        "label":this.categoryName,
        "logo": this.catImageUrl,
        "visibility":this.catVisibility.nativeElement.value
      }
  }).subscribe(res=>{
    if(res.status===200){
      this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
      this.populateCatgory();
    }
    else{
      this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
    }
    
      })
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
          this.populateCatgory();
        }
        else{
          this.toastrService.error('Something is wrong','Error',{positionClass:'toast-bottom-right'});
        }
      })
      }
      else{
        this.toastrService.error('please enter category name','Error',{positionClass:'toast-bottom-right'});
      }
     }
     else{
       this.toastrService.error('Enter valid url','Error',{positionClass:'toast-bottom-right'});
     }
  }
}
