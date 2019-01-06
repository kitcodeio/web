import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";

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

  constructor(private http: HttpService, private route: ActivatedRoute, private domSanitizer: DomSanitizer, private renderer: Renderer2, private socket: SocketService) {
    this.stopListening = renderer.listen('window', 'message', this.handleMessage.bind(this));
  }

  ngOnInit() {
    $('#kide-container').css("height", $(document).height() - 80);
    $('#kide-container').css("width", $(document).width());
    this.route.queryParamMap.subscribe(({params}: any) => {
      this.run(params.id);
    });
  }

  ngOnDestroy() {
    if(this.isActive) this.socket.emit('kide:closed');
  }

  run(id: any): void {
    this.http.runContainer(id).subscribe(res => {  
      this.container_id = res.entity.container_id;
      this.kide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://' + res.entity.subdomain + '-kide.kitcode.io');
      this.interval = setInterval(()=>{
        this.kide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://' + res.entity.subdomain + '-kide.kitcode.io');    
      }, 5000);
    });
  }

  handleMessage(event: Event) {
    const message = event as MessageEvent;
    if (message.data == 'loaded' && this.loading) {
      this.isActive = true;
      this.loading = false;
      clearInterval(this.interval);
      this.socket.emit('info', {
        id: this.container_id
      });
      this.socket.on('close').subscribe(()=>{
        this.isActive = false;
        this.kide = this.domSanitizer.bypassSecurityTrustResourceUrl('https://i.giphy.com/media/l0He8XWUYnXlbzleg/giphy.webp');
      });
    } else console.log(message.data);
  }

}
