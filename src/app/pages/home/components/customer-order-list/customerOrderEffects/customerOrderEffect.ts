import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType } from '@ngrx/store';
import { catchError, filter, map, mergeMap, of, switchMap } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import {
  getCustomerOrder,
  getCustomerOrderFail,
  getCustomerOrderSuccess,
  orderStatusChanged,
  orderStatusChangedFail,
  orderStatusChangedSuccess,
} from '../customerOrderActions/customerOrderActions';
import { customerOrderActionTypes } from '../customerOrderActionTypes/customerOrderActionTypes';
import { CustomerOrdersService } from '../services/customer-orders.service';
import { CustomerOrder } from '../types/CustomerOrder';

@Injectable()
export class CustomerOrderEffect {
  constructor(
    private $actions: Actions,
    private customerOrdersService: CustomerOrdersService
  ) {}

  $getOrderByCustomerId = createEffect(() =>
    this.$actions.pipe(
      ofType(customerOrderActionTypes.GET_CUSTOMER_ORDERS),
      switchMap((action: any) => {
        return this.customerOrdersService.getOrders().pipe(
          map((data: CustomerOrder[]) => {
            return data.filter((x) => x.customerId === action.id);
          })
        );
      }),
      map((data: CustomerOrder[]) => {
        return getCustomerOrderSuccess({ orders: data });
      }),
      catchError((error) => {
        return of(getCustomerOrderFail({ error: error }));
      })
    )
  );

  $orderStatusChanged = createEffect(() =>
    this.$actions.pipe(
      ofType(orderStatusChanged),
      mergeMap((data: { id: number; status: string }) => {
        return this.customerOrdersService.changeOrderStatus(
          data.id,
          data.status
        );
      }),
      map((data: { isStatusChanged: boolean }) => {
        return orderStatusChangedSuccess({
          isStatusChanged: data.isStatusChanged,
        });
      }),
      catchError((error) => {
        return of(orderStatusChangedFail({ error: error }));
      })
    )
  );
}
