import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthserviceService } from '../auth/authservice.service';


@Injectable({
  providedIn: 'root'
})
export class RBACService implements CanActivate {

  constructor(
    private router: Router, 
    private authService: AuthserviceService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
