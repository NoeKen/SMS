import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminsService } from './admins.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate {

  constructor (private adminService: AdminsService, private router: Router){}

  canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    ):boolean
    // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if (!this.adminService.getToken()) {
        this.router.navigateByUrl("/signin");
    }
    return this.adminService.isLoggedIn();
  }

}
