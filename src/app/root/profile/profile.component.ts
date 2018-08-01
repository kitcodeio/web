import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { AuthserviceService } from '../../services/auth/authservice.service';
import { LoadiingComponent } from '../../loadiing/loadiing.component';

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
  loadindScreen:boolean;

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

    this.loadindScreen = true;

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
      if (res.status == 200) {
        this.data.kide = 'https://' + res.entity.kide;
        this.data.terminal = 'https://' + res.entity.terminal;
        this.data.preview = 'https://' + res.entity.app;
        this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://' + res.entity.kide);
      } else {
        console.log('gareeb ki aulad.. muh utha k aa gaya.. ja k course kharid aggey');
      }
    });
  }
  
  handleMessage(event: Event) {
    const message = event as MessageEvent;
    if (message.data == 'loaded') {
      this.iframe.nativeElement.contentWindow.postMessage(JSON.stringify(this.data), '*');
      this.loadindScreen = false;
      console.log('hkjskcd');
    }
    else if (message.data == 'minimize') this.min();
    else if(message.data == 'maximize') this.max();
    else if(message.data == 'close') console.log('time to close');
    else console.log(message.data);
  }
}
