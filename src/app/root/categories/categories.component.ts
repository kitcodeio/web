import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { UserInfoService } from '../../services/userInfo/user-info.service';
import { AuthserviceService } from '../../services/auth/authservice.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

declare var $:any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  uploadImgUrl: any = "/assets/images/upload.png";

  courses: Observable<any[]>;
  private searchTerms = new Subject<string>();
  updateCategory: any = {};
  newCategory: any = {};
  allCourseCategory=[];
  userName:string;
  flag:boolean=false;
  userRole;
  userHige:boolean;
  loadingFlag:boolean=false;
  categoryName;
  categories=[];
  catImageUrl:string;
  saveBtnText = 'Save';
  updateBtnText = 'Update';

  deletedCategoryId:number;
  updateCategoryId:number;


  constructor(
    private userInfo: UserInfoService,
    private router:Router,
    private http: HttpService,
    private useInfo: UserInfoService,
    private authService: AuthserviceService,
    private toastrService: ToastrService,
  ) { }


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

  setUpdateCategory(cat){
    this.updateCategory = JSON.parse(JSON.stringify(cat));
    this.uploadImgUrl = this.updateCategory.logo;
  }

  async update() {
    this.updateBtnText = 'Updating';
    if (this.updateCategory.logo !== this.uploadImgUrl) this.updateCategory.logo = await this.uploadImage(this.updateCategory.logo);
    this.http.putData('CourseCategory',{
      id: this.updateCategory.id,
      data: this.updateCategory
    }).subscribe(res=>{
      if(res.statusCode===200){
        this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
        this.populateCatgory();
        this.updateCategory = {};
	this.updateBtnText = 'Update';
	$('.modal').modal('hide');
        this.uploadImgUrl = "/assets/images/upload.png";
      }
      else{
        if(res.error.message !== "nothing was updated" ) this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    })
  }

  async addCategory(){

      this.saveBtnText = 'Saving';
    if (this.newCategory.logo && this.newCategory.label) {
      this.saveBtnText = 'Saving';
      this.newCategory.logo = await this.uploadImage(this.newCategory.logo);
      this.http.postcategory('CourseCategory', this.newCategory).subscribe(res=>{
        if(res.statusCode==201){
         this.toastrService.success('Category succusfully created','Successs',{positionClass:'toast-bottom-right'});
         this.allCourseCategory.push(this.newCategory);
	 this.newCategory = {};
         this.saveBtnText = 'Save';
	 $('.modal').modal('hide');
	} else this.toastrService.error('Something is wrong','Error',{positionClass:'toast-bottom-right'});
      });
    } else this.toastrService.error('Please select a logo and also a name for the new category','Error',{positionClass:'toast-bottom-right'});
  }


  uploadImage(file): Promise<any> {
    let input = new FormData();
    input.append('model', 'CourseCategory');
    input.append('file', file);
    return new Promise((resolve, reject)=>{
      this.http.upload(input).subscribe(res => {
        if (res.statusCode == 200) return resolve(res.path);
        return resolve(res.error);
      });
    });
  };


  readUrl(event:any, type: any) {
    if(type == 'new') this.newCategory.logo = event.srcElement.files[0];
    else this.updateCategory.logo = event.srcElement.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.uploadImgUrl = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }





}
