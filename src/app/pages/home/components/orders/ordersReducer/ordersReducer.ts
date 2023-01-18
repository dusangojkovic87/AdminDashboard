import { state } from '@angular/animations';
import { Actions } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import {
  getOrdersFail,
  getOrdersSuccess,
} from '../ordersActions/ordersActions';
import { OrdersState } from '../types/OrdersState';

const OrdersState: OrdersState = {
  orders: null,
  errors: null,
};

export const ordersReducer = createReducer(
  OrdersState,
  on(getOrdersSuccess, (state: OrdersState, action) => ({
    ...state,
    orders: action.orders,
  })),
  on(getOrdersFail, (state: OrdersState, action) => ({
    ...state,
    errors: action.errors,
  }))
);
