import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;

  constructor() {
    let mode = localStorage.getItem('mode');
    let client = "https://api.kitcode.io";
    if (mode == 'local' && window.location.host.includes('localhost'))
      client = 'http://localhost:9090';
    this.socket = io.connect(client);
  }

  on(evt): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(evt, res => observer.next(res));
    });
  }

  emit(evt: string, data?: any): void {
    this.socket.emit(evt, data);
  }

}
