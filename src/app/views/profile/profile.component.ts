import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  iframe_html: any;
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
    this.iframe_html = this.embedService.embed(this.videos[index]);
  }

  ngOnInit() {
    this.iframe_html = this.embedService.embed(this.youtubeUrl);
  }

}
