import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/User';
import { PersistenceService } from 'src/app/Services/persistence.service';
import {
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
        console.log('register effect');
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

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess),
        tap(() => {
          this.router.navigateByUrl('/home');
        })
      ),
    { dispatch: false }
  );
}
