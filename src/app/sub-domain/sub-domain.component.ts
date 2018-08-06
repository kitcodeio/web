import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-domain',
  templateUrl: './sub-domain.component.html',
  styleUrls: ['./sub-domain.component.css']
})
export class SubDomainComponent implements OnInit {
  domainName:string;
  allSubDomain=[];
  constructor(private http: HttpService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.populateDomain();
  }


  addSubDomain(){
    if(this.domainName){
      this.http.postData('Subdomain',{"subdomain":this.domainName})
      .subscribe(res=>{
      if(res.status==201){
        this.toastrService.success('Sub Domain created successfully','Success',{positionClass:'toast-bottom-right'});
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    })
    }
    else{
      this.toastrService.info('Please enter domain name','Error',{positionClass:'toast-bottom-right'});
    }
  }

  populateDomain(){
    this.http.getData('Subdomain')
    .subscribe(res=>{
      this.allSubDomain = res.entity;
    })
  }
}
