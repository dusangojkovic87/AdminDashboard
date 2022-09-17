import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/User';
import { PersistenceService } from 'src/app/Services/persistence.service';
import {
  loginAction,
  loginFailure,
  loginSuccess,
  logOutAction,
  logOutSuccess,
  registerAction,
  registerFailure,
  registerSuccess,
} from '../authActions/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authServise: AuthService,
    private persistanceService: PersistenceService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ user }) => {
        return this.authServise.RegisterUser(user).pipe(
          map((user: User) => {
            this.persistanceService.set('token', user.token);

            return registerSuccess({ user });
          })
        );
      }),
      catchError((errorResponce: HttpErrorResponse) => {
        return of(registerFailure(errorResponce));
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ loginRequest }) => {
        return this.authServise.LoginUser(loginRequest).pipe(
          map((user: User) => {
            this.persistanceService.set('token', user.token);
            return loginSuccess({ user });
          })
        );
      }),
      catchError((errorResponce: HttpErrorResponse) => {
        return of(loginFailure(errorResponce));
      })
    )
  );

  redirectAfterAuth$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess, registerSuccess),
        tap(() => {
          this.router.navigateByUrl('');
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logOutAction),
      map(() => {
        this.persistanceService.clearToken('token');
        return logOutSuccess();
      })
    )
  );

  logOutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOutSuccess),
        tap(() => {
          this.router.navigateByUrl('/auth/login');
        })
      ),
    { dispatch: false }
  );
}
