import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {DomSanitizer} from "@angular/platform-browser";
=======
//import { EmbedVideoService } from 'ngx-embed-video';
>>>>>>> 03b73dc999fdf09a7240f11c18cb0653f80f02a2

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

<<<<<<< HEAD
  constructor(private domSanitizer : DomSanitizer) { 
  
  }

  play(index){
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos[index]);
  }

  ngOnInit() {
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iHhcHTlGtRs');
=======
	constructor( /*private embedService: EmbedVideoService*/ ) { 
  
  }

	//play(index){
	//    this.title = this.titles[index] +" "+"is playing";
	//    this.iframe_html = this.embedService.embed(this.videos[index]);
	//  }

  ngOnInit() {
	  //this.iframe_html = this.embedService.embed(this.youtubeUrl);
>>>>>>> 03b73dc999fdf09a7240f11c18cb0653f80f02a2
  }

}
