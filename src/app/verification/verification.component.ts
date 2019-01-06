import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  email: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.token) {
        this.http.verifyToken(params.token).subscribe(res => {
	  if (res.error) this.router.navigate(['/']);
	  else this.email = res.email
	}) 
      }
      else this.router.navigate(['/']);
    }); 
  }
}
