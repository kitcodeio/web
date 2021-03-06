import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
import * as io from 'socket.io-client';

import { HttpService } from '../../services/http/http.service';
import { SocketService } from '../../services/socket/socket.service';

declare var $:any;

@Component({
  selector: 'app-kide',
  templateUrl: './kide.component.html',
  styleUrls: ['./kide.component.css']
})
export class KideComponent implements OnInit, OnDestroy {

  stopListening: Function;
  loading: boolean = true;
  kide: any;
  interval: any;
  container_id: any;
  isActive: boolean = false;
  ideSocket: any;

  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute, private domSanitizer: DomSanitizer, private renderer: Renderer2, private socket: SocketService) {
    this.stopListening = renderer.listen('window', 'message', this.handleMessage.bind(this));
  }

  ngOnInit() {
    $('#kide-container').css("height", $(document).height() - 80);
    $('#kide-container').css("width", $(document).width());
    $('.loading').css("height", $(document).height() - 80);
    $('.loading').css("width", $(document).width());
    this.route.queryParamMap.subscribe(({params}: any) => {
      this.run(params.id);
    });
  }

  ngOnDestroy() {
    if(this.isActive) this.socket.emit('kide:closed');
  }

  run(id: any): void {
    let self = this;
    this.http.runContainer(id).subscribe(res => { 
      this.container_id = res.entity.container_id;
      if (id !== this.container_id) this.router.navigate(['/root/run'], { queryParams: { id: this.container_id }});
      this.ideSocket = io.connect('https://' + res.entity.subdomain + '-kide.kitcode.io');
      this.ideSocket.on('connect', () => {
	console.log('connection with the container has been established');
        self.kide = self.domSanitizer.bypassSecurityTrustResourceUrl('https://' + res.entity.subdomain + '-kide.kitcode.io');
      });
      this.ideSocket.on('disconnect', () => {
        console.log('connection with the container is now being closed');
      });
    });
  }

  handleMessage(event: Event) {
    const message = event as MessageEvent;
    if (message.data == 'loaded' && this.loading) {
      this.ideSocket.disconnect();
      this.isActive = true;
      this.loading = false;
      $('.loading').hide();
      clearInterval(this.interval);
      this.socket.emit('info', {
        id: this.container_id
      });
      this.socket.on('close').subscribe(()=>{
        this.isActive = false;
        this.kide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://i.giphy.com/media/l0He8XWUYnXlbzleg/giphy.webp');
      });
    } 
  }

}
