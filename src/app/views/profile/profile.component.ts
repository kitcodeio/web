import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  iframe_html: any;
  title:string;
  titles=[
    "NodeJS for beginners",
    "Angular 5",
    "Test1"
  ]
  videos=[
    "https://www.youtube.com/embed/KMX1mFEmM3E",
    "https://www.youtube.com/embed/ZWJH7JQCjLM", 
    "https://www.youtube.com/embed/RUKcrphvO8I"
  ]

  youtubeUrl;

  constructor(private domSanitizer : DomSanitizer, private course:CourseService) { 
  
  }

  play(index){
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos[index]);
  }

  ngOnInit() {
    console.log(this.course.getarray());
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/RUKcrphvO8I');
  }

}
