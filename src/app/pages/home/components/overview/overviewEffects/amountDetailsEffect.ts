import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getAmountDetailsAction,
  getAmountDetailsActionFail,
  getAmountDetailsActionSuccess,
} from '../overviewActions/overviewActions';
import { OrdersAmountService } from '../services/orders-amount.service';
import { AmountDetails } from '../types/AmountDetails';

@Injectable()
export class AmountDetailsEffect {
  constructor(
    private actions: Actions,
    private orderAmountService: OrdersAmountService
  ) {}

  getAmountDetails$ = createEffect(() =>
    this.actions.pipe(
      ofType(getAmountDetailsAction),
      switchMap(() => {
        return this.orderAmountService.getAmountDetails();
      }),
      map((amountDetails: AmountDetails) => {
        return getAmountDetailsActionSuccess({ amountDetails });
      }),
      catchError((error) => {
        return of(getAmountDetailsActionFail({ error }));
      })
    )
  );
}
