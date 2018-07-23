import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { AuthserviceService } from '../../services/auth/authservice.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  data: any  = {
    kide: '',
    terminal: '',
    preview: ''
  };
  stopListening: Function;
  course_id: number;
  chapters: any;
  iframe_html: any;
  title: string;
  user: any;
  @ViewChild('frame') frame: ElementRef;
  @ViewChild('iframe') iframe: ElementRef;
  videos;
  youtubeUrl;
  ide;
  sizeFlag: boolean;
  maxFlag: boolean = false;
  max() {
    this.maxFlag = true;
  }
  min() {
    this.maxFlag = false;
  }
  constructor(
  	private renderer: Renderer2,
  	private eRef: ElementRef,
  	private domSanitizer: DomSanitizer,
	private route: ActivatedRoute,
	private http: HttpService,
        private authService: AuthserviceService
  ) {
    this.stopListening = renderer.listen('window', 'message', this.handleMessage.bind(this));
  }
	
  play(index) {
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos[index].url);
  }
	
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.course_id = params.course;
      this.http.getCourseSection('CourseChapter', params.section).subscribe((res) => {
        this.chapters = res.entity;
        this.videos = this.chapters;
        this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chapters[params.chapter].url);
      });
    });
    
    this.user = this.authService.getUserData();
  }

  ngAfterViewInit(){
    this.http.getContainer(this.course_id).subscribe(res => {
      this.data.kide = 'http://' + res.entity.kide;
      this.data.terminal = 'http://' + res.entity.terminal;
      this.data.preview = 'http://' + res.entity.app;
      this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl('http://' + res.entity.kide);
    });
  }

  handleMessage(event: Event) {
    console.log('frame',this.iframe.nativeElement)
    const message = event as MessageEvent;
    console.log(message.data);
    if (message.data == 'loaded') this.iframe.nativeElement.contentWindow.postMessage(JSON.stringify(this.data), '*');
    else if (message.data == 'minimize') this.min();
    else if(message.data == 'maximize') this.max();
    else if(message.data == 'close') console.log('time to close');
    else console.log(message.data);
  }
}
