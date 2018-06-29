import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

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
    "Test1",
    "Test2"
  ]
  videos=[
    "https://www.youtube.com/embed/KMX1mFEmM3E",
    "https://www.youtube.com/embed/ZWJH7JQCjLM", 
    "https://www.youtube.com/embed/RUKcrphvO8I",
    "https://www.youtube.com/embed/iHhcHTlGtRs"
  ]

  youtubeUrl;

  constructor(private domSanitizer : DomSanitizer) { 
  
  }

  play(index){
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos[index]);
  }

  ngOnInit() {
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iHhcHTlGtRs');
  }

}
