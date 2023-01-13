import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType } from '@ngrx/store';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import {
  getCustomerOrder,
  getCustomerOrderFail,
  getCustomerOrderSuccess,
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
      map((data) => {
        return getCustomerOrderSuccess({ orders: data });
      }),
      catchError((error) => {
        return of(getCustomerOrderFail({ error: error }));
      })
    )
  );
}
