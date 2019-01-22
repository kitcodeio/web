import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { AuthserviceService } from '../../services/auth/authservice.service';
import { ToastrService } from 'ngx-toastr';

import { SocketService } from '../../services/socket/socket.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {

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
  loadindScreen:boolean = true;
  interval;
  chapter: number;
  youtubeVideo:boolean;
  loadingButton:boolean;
  loadIde:boolean;
  image_id: any;
  isActive: boolean;
  allContainers: any[] = [];
  container_id;

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
    private authService: AuthserviceService,
    private toastrService:ToastrService,
    private socket: SocketService
  ) {
    this.stopListening = renderer.listen('window', 'message', this.handleMessage.bind(this));
  }
	
  play(index) {
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos[index].url);
    this.youtubeVideo = this.youtubeUrl.changingThisBreaksApplicationSecurity.includes('youtube');
  }
	
  ngOnInit() {

    this.loadingButton = true;
    this.loadIde = false;
    this.route.params.subscribe(params => {
      this.course_id = params.course;
      this.http.getCourseSection('CourseChapter', params.section).subscribe((res) => {
	      this.startContainer(params.section);
	      if(res.entity.Image) this.allContainers = res.entity.Image.Containers;
	      this.image_id = res.entity.image_id;
	      this.title = res.entity.label;
	      //this.chapters = res.entity;
	      //this.videos = this.chapters;
	      //this.chapter = params.chapter;
        this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(res.entity.link);
        this.youtubeVideo = this.youtubeUrl.changingThisBreaksApplicationSecurity.includes('youtube');
	      });
    });
    this.user = this.authService.getUserData();
  }

  ngAfterViewInit(){
    // this.http.getContainer(this.course_id).subscribe(res => {
    //   if (res.statusCode == 200) {
    //     this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chapters[this.chapter].url);
    //     this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://' + res.entity.kide);
    //   } else { 
    //     this.loadindScreen = false;
    //     this.toastrService.error(res.error.error,'Error',{positionClass:'toast-bottom-right'});       }
    // });
  }

  ngOnDestroy() {
    if(this.isActive) this.socket.emit('kide:closed');
  }

  startContainer(id): void {
    let self = this;
    this.loadindScreen = true;
    this.loadingButton = false;
    this.loadIde = true;
    this.http.getContainer(id).subscribe(res => {
      if (res.statusCode == 200) {
	this.container_id = res.entity.container_id;
	this.loadIde = true;
	$('#kide').css("height", $(document).height() - 71);      
	this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://' + res.entity.subdomain + '-kide.kitcode.io');
	this.interval = setInterval(()=>{
	  console.log('reloading...');
          this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://' + res.entity.subdomain + '-kide.kitcode.io');
          this.youtubeVideo = this.youtubeUrl.changingThisBreaksApplicationSecurity.includes('youtube');
        },5000);
      } else { 
        this.loadindScreen = false;
	this.toastrService.error(res.error.error, 'Error',{positionClass:'toast-bottom-right'});
      }
    });
  }
  
  handleMessage(event: Event) {
    const message = event as MessageEvent;
    if (message.data == 'loaded' && this.loadindScreen) {
      this.loadindScreen = false;
      this.isActive = true;
      clearInterval(this.interval);
      this.socket.emit('info', {
        id: this.container_id
      });
      this.socket.on('close').subscribe(()=>{
	this.isActive = false;
        this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://i.giphy.com/media/l0He8XWUYnXlbzleg/giphy.webp');
      });
    }
    else if (message.data == 'minimize') this.min();
    else if(message.data == 'maximize') this.max();
    else if(message.data == 'close'){
    }
    else console.log();
  }
}
