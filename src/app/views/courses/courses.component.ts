import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  flag:boolean= true;
  courseName:string;
  imageId:string;
  sectionName:string;
  sectionDis:string;
  chapterName:string;
  chapterDis:string;
  chapterUrl:string;
  allSection=[];
  allChapter=[];
  selectIndex;
  obj={};

  constructor() { }

  ngOnInit() {
  }

  addSection(){
    this.flag=false;
      this.allSection.push({sectionName:this.sectionName, sectionDis:this.sectionDis});
  }
  addChapter(i){

    let sec = this.allSection[i].sectionName;
    this.obj[sec] = {chapterName:this.chapterName,chapterDis:this.chapterDis,chapterUrl:this.chapterUrl};
    this.allChapter.push([i,this.obj]);

    console.log(this.allChapter);
    console.log(i)
    
  }

  getIndex(i){
    this.selectIndex = i;
  }

}
