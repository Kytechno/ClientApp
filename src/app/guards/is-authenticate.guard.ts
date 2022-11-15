import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { GesnotificationService } from '../services/gesnotification.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticateGuard implements CanActivate {
  constructor( private auth: AuthService, private router: Router, private notification: GesnotificationService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isLoggedIn$
      .pipe(
        tap((isLoggedIn) => {
          /*if (!isLoggedIn) {
            this.router.navigate(['login']);
          }else{*/
            this.notification.connect();
          //}
        })
      );
  }
  
}

