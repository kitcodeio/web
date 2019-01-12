import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorials: any[] = [];
  dockerFile: string[] = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getTutorials().subscribe(res => {
      this.tutorials = res.entity;
    });
  }

  approve(tutorial: any, i: number) {
    tutorial.approved = !tutorial.approved;
    this.http.updateTutorial(tutorial).subscribe(res => {	
      console.log(res);
      if(!res.error) {
        this.tutorials[i] = tutorial;
        this.dockerFile = res.dockerFile.split('\n');
      }
    });
  };

}
