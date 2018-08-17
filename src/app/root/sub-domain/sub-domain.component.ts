import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-domain',
  templateUrl: './sub-domain.component.html',
  styleUrls: ['./sub-domain.component.css']
})
export class SubDomainComponent implements OnInit {
  domainName:string;
  allSubDomain=[];

  pages: number[];
  page: number = 1;

  constructor(private http: HttpService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.populateDomain();
  }


  addSubDomain(){
      this.http.postData('Subdomain',{"subdomain":this.domainName})
      .subscribe(res=>{
      if(res.statusCode==201){
        this.toastrService.success('Sub Domain created successfully','Success',{positionClass:'toast-bottom-right'});
        this.populateDomain();
      }
      else{
        this.toastrService.error(res.error,'Error',{positionClass:'toast-bottom-right'});
      }
    })
  }

  changePage(index: number): void {
    this.page = index;
    this.http.getData('Subdomain', index)
    .subscribe(res=>{
      this.allSubDomain = res.entity.rows;
    })
  }

  populateDomain(){
    this.http.getData('Subdomain')
    .subscribe(res=>{
      let n = Math.ceil(res.entity.count/10);
      this.pages = Array(n);
      for(var i = 0; i < n; i++) this.pages[i]=i+1;
      this.allSubDomain = res.entity.rows;
    })
  }
}
