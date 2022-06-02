import {HostListener, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LowResolutionGuard implements CanActivate {

  public innerWidth: any;
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 900) {
      return true;
    } else {
      this.router.navigate(['/main/entrieslowres'])
    }
    return false;
  }


  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }


}
