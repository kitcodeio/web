import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { UserInfoService } from '../../../services/userInfo/user-info.service'
import { Section } from '../../../models/section';
import { Course } from '../../../models/course';
import { AuthserviceService } from '../../../services/auth/authservice.service';
import { Chapter } from '../../../models/chapter';
import { ToastrService } from 'ngx-toastr'; 
// Drag & drop
import { DragulaService } from 'ng2-dragula';
import { PlatformLocation } from '@angular/common'


@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {

  allCourseCategory=[]
  allSections=[];
  allChapters=[];
  course_id;
  isAdmin:boolean;
  btnTxt: string = 'Subscribe';
  deleteSectionId:number;
  updateIndex:number;
  subscribeFlag:boolean;
  updateChapterIndex:number;
  updateSectionIndex:number;
  deleteChapterId:number;

  courseDetail: Course = {} as Course;
  section: Section = {} as Section;
  chapter: Chapter = {} as Chapter;
  deletedSectionIndex:number;
  deletedChapterIndex:number;
  deletedSectionIndexWithChapter:number;
  sectionName:string;
  sectionDescription:string;
  courseId:number;
  chapterName:string;
  chapterDescription:string;
  sectionIdForAddChapter:string;
  angular:any;
  sectionIndexForDAD:number;
  @ViewChild('Chapter1') Chapter:ElementRef;
  chapterIndexOnDrag:number;
  chapterIndexOnDrop:number;
  sectionIndexOnDrag:number;
  sectionIndexOnDrop:number;

  constructor(private zone: NgZone, location: PlatformLocation, private elRef: ElementRef, private _dragulaService: DragulaService, private authService: AuthserviceService, private toastrService: ToastrService, private userInfo: UserInfoService, private route:ActivatedRoute, private http: HttpService, private scrollbarService: MalihuScrollbarService, private router: Router) { 
    this._dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === "group-handle"
    });

    location.onPopState(() => {
      window.location.reload();
    });
  }

  private getElementIndex(el: any) {
    return [].slice.call(el.parentElement.children).indexOf(el);
}

  onClick(i){
    this.sectionIndexForDAD=i;
  }

  ngOnInit() {
    
    //chapter drag and drop
    this._dragulaService.drag().subscribe(res=>{
      this.chapterIndexOnDrag = this.getElementIndex(res.el);
      this.sectionIndexOnDrag = this.getElementIndex(res.el);
    });

    this._dragulaService.drop().subscribe((res:any)=>{
      this.chapterIndexOnDrop = this.getElementIndex(res.el);
      this.sectionIndexOnDrop = this.getElementIndex(res.el);

      let section1 = this.allSections[this.sectionIndexOnDrag];
      let section2 = this.allSections[this.sectionIndexOnDrop];

      let item,item1;

      if(this.sectionIndexForDAD || this.sectionIndexForDAD==0){
        item = this.allSections[this.sectionIndexForDAD].CourseChapters[this.chapterIndexOnDrop];
        item1 = this.allSections[this.sectionIndexForDAD].CourseChapters[this.chapterIndexOnDrag];

        this.http.putData('CourseChapter',{
          id:item.id,
          data:{
            label:item1.label,
            url:item1.url
          }
        })
        .subscribe(res=>{
        });
  
        this.http.putData('CourseChapter',{
          id:item1.id,
          data:{
            label:item.label,
            url:item.url
          }
        })
        .subscribe(res=>{
          this.populateSectionWithCourseId();
          this.sectionIndexForDAD=null;
        });
      }

      else{
        this.http.putData('CourseSection',{
          id:section1.id,
          data:{
            label:section1.label,
            description:section1.description,
            index:section2.index
          }
      }).subscribe(res=>{
      })

      this.http.putData('CourseSection',{
        id:section2.id,
        data:{
          label:section2.label,
          description:section2.description,
          index:section1.index
        }
    }).subscribe(res=>{
      this.populateSectionWithCourseId();
    })
      }
        
    });

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

    this.populateCatgory();
    this.populateSectionWithCourseId();

    this.isAdmin=this.authService.isAdmin();

    this.http.getCoursePurchaseDetails(this.course_id)
    .subscribe(res=>{
      this.courseDetail = res.entity;
      if(this.courseDetail.status == 'purchased'){
        this.btnTxt = 'Subscribed';
      }
    });
    
  }

  onItemDrop(e: any,i) {
    // Get the dropped data here
    this.allSections.push(e.dragData);
}

  populateSectionWithCourseId(){

    this.route.params.subscribe(params=>{
      this.course_id = params.id; 
      this.http.getDataWithId('CourseSection',params.id)
      .subscribe(res=>{
        this.allSections = res.entity;
        this.courseId=params.id;
      })    
    });

  }

  populateCatgory(){
    this.http.getcategory('CourseCategory').subscribe(res=>{
      this.allCourseCategory = res.entity;
    })
  }

  setDeleteSectionId(id,index){
    this.deleteSectionId = id;
    this.deletedSectionIndex=index;
  }

  setDeleteChapter(id,secIndex,chapIndex){
    this.deleteChapterId = id
    this.deletedSectionIndexWithChapter=secIndex;
    this.deletedChapterIndex=chapIndex;
  }

  deleteSection(){
    this.http.deleteData('CourseSection', this.deleteSectionId)
    .subscribe(res=>{
      this.allSections.splice(this.deletedSectionIndex,1);
    })
  }

  setUpdateSection(section: Section,index: number) :void{
    let obj = Object.create(section);
    this.section = obj;
    this.updateIndex = index;
  }

  setUpdateChapter(chapter: Chapter, sectionIndex:number, chapterIndex: number): void{
    let obj = Object.create(chapter);
    this.chapter = obj;
    this.updateSectionIndex = sectionIndex
    this.updateChapterIndex = chapterIndex;
  }

  updateSection(){
  this.http.putData('CourseSection',{
    id:this.section.id,
    data:this.section
}).subscribe(res=>{
  if(res.statusCode===200){
    this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
    this.allSections[this.updateIndex] = this.section;
  }
  else{
    this.toastrService.error(res.error.message,'Error',{positionClass:'toast-bottom-right'});
  }
  
    })
  }

  updateChapter(){
    this.http.putData('CourseChapter',{
      id:this.chapter.id,
      data:this.chapter
  }).subscribe(res=>{
    if(res.statusCode===200){
      this.toastrService.success(res.message,'Success',{positionClass:'toast-bottom-right'});
      this.allSections[this.updateSectionIndex].CourseChapters[this.updateChapterIndex]= this.chapter;
    }
    else{
      this.toastrService.error(res.error.error,'Error',{positionClass:'toast-bottom-right'});
    }
    
      })
    }

  deleteChapter(){
    this.http.deleteData('CourseChapter', this.deleteChapterId)
    .subscribe(res=>{ 
      this.allSections[this.deletedSectionIndexWithChapter].CourseChapters.splice(this.deletedChapterIndex,1);
    })
  }

  subscribe(): void{
    this.subscribeFlag=true;
    this.http.subscribeCourse(this.course_id)
    .subscribe(res=>{
      this.subscribeFlag = false;
      if(res.statusCode===200){
        this.courseDetail.status = 'purchased';
        this.btnTxt = 'Subscribed';
        this.toastrService.success(res.message,'Successs',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error(res.error.error,'Error',{positionClass:'toast-bottom-right'});
      }
    })
  }

  highlight(id: string): void {
    setTimeout(()=>{
      $('.selected').removeClass('selected');
      $(id).addClass('selected');
    });
  }

  addSection(){
    this.http.postsection('CourseSection',{
      "course_id": this.courseId,
	    "label":this.sectionName,
      "description": this.sectionDescription,
      "index": this.allSections.length
    }).subscribe(res=>{
      this.populateSectionWithCourseId();
    })
  }

  sectionIndex:number;
  getSectionId(id,index){
    this.sectionIdForAddChapter=id;
    this.sectionIndex = index;
  }

  addChapter(){
    this.http.postchapter('CourseChapter',{
      "section_id": this.sectionIdForAddChapter,
	    "label": this.chapterName,
      "url": this.chapterDescription,
      "index": this.allSections[this.sectionIndex].CourseChapters.length
    }).subscribe(res=>{
      this.populateSectionWithCourseId();
    })
  }
}
