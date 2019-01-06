import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://api.kitcode.io/'; 
    let host = window.location.hostname;
    if (host == 'localhost') {
      let mode = localStorage.getItem('mode');
      if(mode == 'local') this.baseUrl = 'http://localhost:9090/';
    }
  }
}
