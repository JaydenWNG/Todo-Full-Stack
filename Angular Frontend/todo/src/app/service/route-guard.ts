import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentication } from './hardcoded-authentication';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private hardcodedAuthentication: HardcodedAuthentication, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    if (this.hardcodedAuthentication.isUserLoggedIn()) {
      return true;
      this.router.navigate(['login']);
    }
    return false;
  }
}
