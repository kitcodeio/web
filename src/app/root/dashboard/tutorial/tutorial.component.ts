import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

declare var $:any;

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit, OnDestroy {

  tutorial: any = {};
  tutorials: any[] = [];
  interval: any;
  tags: any[] = [];
  showLoader: boolean = false;
  categories: any;
  tag: any;

  private searchCategory = new Subject<any>();
  
  constructor(private http: HttpService, private toastrService: ToastrService) { }

  searchtags(term: string): void {
    if (term) if (term.length) {
      this.searchCategory.next(term);
      $('.search-box').show();
      this.showLoader = true;
    }
  }

  edit(id) {
    this.http.getDataFromOne('CourseChapter', id).subscribe(res => {
      this.tutorial = res.entity;
      this.tags = this.tutorial.TutorialTags.map(el => {
        console.log(el);
        return el.Category;
      });
      console.log(this.tags);
      $('#edit-tutorial').modal('show');
    });  
  }

  populate() {
    this.http.getTutorials().subscribe(res => {
      this.tutorials = res.entity;
    });
  }

  ngOnInit() {
    this.populate();
    this.interval = setInterval((function(){
      this.populate();
    }).bind(this), 5000);
    this.searchCategory.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.http.searchCourse(term, 'Category'))
    ).subscribe(res => {this.categories = res; this.showLoader = false;});
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  approve(tutorial: any, i: number) {
    tutorial.approved = !tutorial.approved;
    this.http.updateTutorial(tutorial).subscribe(res => {	
      if(!res.error) {
        this.tutorials[i] = tutorial;
        this.populate();
      }
    });
  };

  addtag(tag) {
    this.tags.push(tag);
    this.showLoader = false;
    this.tag = '';
  }

  popTag(index: number): void {
    this.tags.splice(index,  1);
  }

  update() {
    console.log(this.tutorial, this.tags);
    this.tutorial.arr = this.tags;
    this.tutorial.tags = this.tags.map(tag => tag.label).join(',');
    this.http.putData('Tutorial', {
      id: this.tutorial.id,
      data: this.tutorial
    }).subscribe(res => {
      if (res.statusCode == 200){
       this.toastrService.success('','Success',{positionClass:'toast-bottom-right'});
      }
       else this.toastrService.error('some error','Error',{positionClass:'toast-bottom-right'}); 
       $('#edit-tutorial').modal('hide');
    });
  }

  delete(id) {
    this.http.deleteTutorial(id).subscribe(res => {
      console.log(res);
      this.populate();
    });
  }

}
