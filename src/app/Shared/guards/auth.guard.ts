import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PersistenceService } from 'src/app/Services/persistence.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAllowed: boolean = false;
  constructor(
    private persistanceService: PersistenceService,
    private jwtHelper: JwtHelperService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.store
      .select((state) => state.authState.isAuthenticated)
      .subscribe((data) => {
        if (data) {
          this.isAllowed = data;
        }
      });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAllowed == false) {
      this.router.navigateByUrl('/auth/login');
      return false;
    }

    return this.isAllowed;
  }
}
