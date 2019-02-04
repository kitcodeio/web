import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorials: any[] = [];

  constructor(private http: HttpService) { }

  populate() {
    this.http.getTutorials().subscribe(res => {
      this.tutorials = res.entity;
    });
  }

  ngOnInit() {
    this.populate();
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
