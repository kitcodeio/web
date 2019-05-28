import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http/http.service'
import { Router } from '@angular/router';


declare var CodeMirror: any;
declare var popover: any;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, OnDestroy {

  selected: any;
  allImages: any= [];
  allContainers: any = [];
  interval: any;

  constructor(private router: Router, private http :HttpService) { }

  change(image: any): void{
    this.selected = image;
  }

  ngOnInit() {
    this.populateImage();
    this.interval = setInterval((function(){
      this.populateImage();
    }).bind(this), 5000);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  populateImage(): void{
    this.http.getData('Image').subscribe((res) => {
      this.allImages=res.rows;
    })
  }

  run(image: any): void {
    this.selected = image;
    this.http.readContainer('image', image.id).subscribe(res => {
      if (!res.error) this.allContainers = res;
    });
  }
}
