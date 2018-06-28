import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  v: number;
  constructor() { }

  getData() {
    //this.v = 10;

    return this.v;
  }
}
