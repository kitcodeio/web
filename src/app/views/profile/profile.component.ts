import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { AuthserviceService } from '../../services/auth/authservice.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  courseDetail: any;
  iframe_html: any;
  title:string;
  user:any;
  videos=[{title: "NodeJS for beginners", link: "https://www.youtube.com/embed/KMX1mFEmM3E"},
	  {title:"Angular 5",link:"https://www.youtube.com/embed/ZWJH7JQCjLM" },
	  {title:"Test1", link: "https://www.youtube.com/embed/RUKcrphvO8I"}];
  youtubeUrl;
  ide;

  constructor(private domSanitizer : DomSanitizer,private route: ActivatedRoute, private http:HttpService, private authService: AuthserviceService) {  }

  play(index){
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos[index].link);
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.http.getCourse('Course').subscribe((res) => {
        this.courseDetail=res.entity[params.index];
        this.videos = this.courseDetail.CourseLinks;
	this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.courseDetail.CourseLinks[0].link);
      });     
    });
    this.user = this.authService.getUserData();
    var regex = new RegExp('[^@]+');
    var url = 'http://'+regex.exec(this.user.email)[0]+'-kide.kitcode.io';
    this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
