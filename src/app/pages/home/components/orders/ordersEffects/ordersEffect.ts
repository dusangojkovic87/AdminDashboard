import { createInjectableType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';
import {
  customerOrderStatusChangedFail,
  customerOrderStatusChangedSuccess,
  getOrders,
  getOrdersFail,
  getOrdersSuccess,
} from '../ordersActions/ordersActions';
import { ordersActionTypes } from '../ordersActionTypes/ordersActionsTypes';
import { OrdersService } from '../services/orders.service';
@Injectable()
export class OrdersEffect {
  constructor(
    private $actions: Actions,
    private ordersService: OrdersService
  ) {}

  $getOrders = createEffect(() =>
    this.$actions.pipe(
      ofType(ordersActionTypes.GET_ORDERS),
      switchMap(() => {
        return this.ordersService.getOrders();
      }),
      map((orders: CustomerOrder[]) => {
        return getOrdersSuccess({ orders: orders });
      }),
      catchError((error) => {
        return of(getOrdersFail({ errors: error }));
      })
    )
  );

  $orderStatusChanged = createEffect(() =>
    this.$actions.pipe(
      ofType(ordersActionTypes.ORDER_STATUS_CHANGED),
      switchMap(({ order, newStatus }) => {
        return this.ordersService.changeOrderStatus(order, newStatus);
      }),
      map(({ orderStatusChanged }) => {
        return customerOrderStatusChangedSuccess({
          isStatusChanged: orderStatusChanged,
        });
      }),
      catchError((error) => {
        return of(customerOrderStatusChangedFail({ error: error }));
      })
    )
  );
}
