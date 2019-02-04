import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit, OnDestroy {

  tutorials: any[] = [];
  interval: any;

  constructor(private http: HttpService) { }

  populate() {
    this.http.getTutorials().subscribe(res => {
      this.tutorials = res.entity;
    });
  }

  ngOnInit() {
    this.populate();
    this.interval = setInterval((function(){
      this.populate();
    }).bind(this), 1000);
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

}
