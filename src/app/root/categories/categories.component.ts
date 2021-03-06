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
    });
  }

  deleteTag(id, i): void {
    this.updateCategory.versions.splice(i,1);
    this.http.deleteData('CategoryVersion', id).subscribe(res => {});
  };

  deleteCategory(){
    this.http.deleteData('Category',this.deletedCategoryId)
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
    let count = 0;
    let self = this;
    let done = (res) => {
        self.toastrService.success('update successful','Successs',{positionClass:'toast-bottom-right'});
        self.populateCatgory();
        self.updateCategory = {};
	self.updateBtnText = 'Update';
	$('.modal').modal('hide');
        self.uploadImgUrl = "/assets/images/upload.png";
    };
    this.updateBtnText = 'Updating';
    this.http.postCourse('CategoryVersion', this.updateCategory.versions).subscribe(res => {
      count++;
      if(count == 2) done(res);
    });
    if (this.updateCategory.logo !== this.uploadImgUrl) this.updateCategory.logo = await this.uploadImage(this.updateCategory.logo);
    this.updateCategory.parent_id = this.updateCategory.parent_id == 'null'?null:this.updateCategory.parent_id;
    this.http.putData('Category',{
      id: this.updateCategory.id,
      data: this.updateCategory
    }).subscribe(res=>{
      count++;
      if(res.statusCode===200){
        if (count == 2) done(res);
      }
      else{
        if(res.error.message !== "nothing was updated" ) this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
        else if (count == 2) done(res);
      }
    })
  }

  async addCategory(){
    this.saveBtnText = 'Saving';
    if (this.newCategory.logo && this.newCategory.label) {
      this.saveBtnText = 'Saving';
      this.newCategory.logo = await this.uploadImage(this.newCategory.logo);
      this.newCategory.parent_id = this.newCategory.parent_id == 'null'?null:this.newCategory.parent_id;
      this.http.postcategory('Category', this.newCategory).subscribe(res=>{
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

  openAdd(): void {
    this.uploadImgUrl = "/assets/images/upload.png";
  }

}
