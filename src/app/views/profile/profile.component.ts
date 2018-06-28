import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

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
    "https://www.youtube.com/watch?v=KMX1mFEmM3E",
    "https://www.youtube.com/watch?v=ZWJH7JQCjLM", 
    "https://www.youtube.com/watch?v=RUKcrphvO8I",
    "https://www.youtube.com/watch?v=iHhcHTlGtRs"
  ]

  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";

  constructor( private embedService: EmbedVideoService ) { 
  
  }

  play(index){
    this.title = this.titles[index] +" "+"is playing";
    this.iframe_html = this.embedService.embed(this.videos[index]);
  }

  ngOnInit() {
    this.iframe_html = this.embedService.embed(this.youtubeUrl);
  }

}
