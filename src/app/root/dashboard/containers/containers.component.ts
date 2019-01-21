import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {
  allContainers = [];
  users:any[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData('Container').subscribe(res=>{
      if(!res.error) this.allContainers = res;
    })
  }

  getContainerId(id){
    this.http.readContainer('container', id).subscribe(res=>{
      this.users=res;
    });
  }

}
