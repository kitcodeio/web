import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public selected: number;
  public alldata: any[];
 
  getarray() {
    console.log('kkkkkkkkkk',this.alldata);
    return this.alldata[this.selected]
  }

  selectCourse(id: number) {
    this.selected = id;
  }

  constructor() {
   }
}
