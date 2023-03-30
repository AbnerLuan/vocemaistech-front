import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router,) { }

  canActivate(activated: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checarRota(activated);
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checarRota(childRoute);
  }

  checarRota(activated: ActivatedRouteSnapshot): Observable<boolean> {
    if (typeof activated.data['expectedRole'] !== 'undefined' && activated.data['expectedRole'].length) {
      const expectedRoles = activated.data['expectedRole'];
      const rolesUser = JSON.parse(JSON.stringify(localStorage.getItem('ROLES_USER')));

      if (rolesUser !== null && rolesUser.length) {

        return new Observable<boolean>(Subscriber => {
          if (!this.temPermissao(expectedRoles, rolesUser)) {
            Subscriber.next(false);
            this.router.navigate(['/sem-autorizacao']);
          } else {
            Subscriber.next(true);
          }
        });
      }
    }
    return new Observable<boolean>(Subscriber => {
      Subscriber.next(true);
      this.router.navigate(['/login']);
    });
  }

  temPermissao(expectedRoles: string[], rolesUser: string[]): boolean {
    for (let role of expectedRoles) {
      if (rolesUser.includes(role)) {
        return true;
      }
    }
    return false;
  }
}
