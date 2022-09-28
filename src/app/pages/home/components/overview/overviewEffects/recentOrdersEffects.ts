import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getRecentOrders,
  getRecentOrdersFail,
  getRecentOrdersSuccess,
} from '../overviewActions/recentOrdersActions';
import { RecentOrdersService } from '../services/recent-orders.service';
import { RecentOrders } from '../types/recentOrders';

@Injectable()
export class RecentOrdersEffect {
  constructor(
    private actions$: Actions,
    private recentOrdersService: RecentOrdersService
  ) {}

  recentOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRecentOrders),
      switchMap(() => {
        return this.recentOrdersService.getRecentOrders();
      }),
      map((data: RecentOrders[]) => {
        return getRecentOrdersSuccess({ orders: data });
      }),
      catchError((err) => {
        return of(getRecentOrdersFail(err));
      })
    )
  );
}
