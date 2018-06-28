import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthserviceService } from './authservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, 
    private authService: AuthserviceService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isTokenExpired()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
