import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
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
    private persistanceService: PersistenceService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ user }) => {
        console.log('register effect');
        return this.authServise.RegisterUser(user).pipe(
          map((user: User) => {
            console.log('user', user);
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
}
