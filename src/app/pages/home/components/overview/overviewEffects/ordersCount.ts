import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getOrderCountDetails,
  getOrderCountDetailsFail,
  getOrderCountDetailsSuccess,
} from '../overviewActions/overviewActions';
import { OrdersCountService } from '../services/orders-count.service';
import { AmountCountDetails } from '../types/AmountCountDetails';

@Injectable()
export class OrdersCountEffect {
  constructor(
    private actions$: Actions,
    private orderCountService: OrdersCountService
  ) {}

  getOrdersCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOrderCountDetails),
      switchMap(() => {
        return this.orderCountService.getOrdersCountDetails();
      }),
      map((data: AmountCountDetails) => {
        return getOrderCountDetailsSuccess({ data });
      }),
      catchError((error) => {
        return of(getOrderCountDetailsFail({ error }));
      })
    )
  );
}
