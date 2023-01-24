import { state } from '@angular/animations';
import { Actions } from '@ngrx/effects';
import * as moment from 'moment';
import { createReducer, on } from '@ngrx/store';
import {
  filterOrdersByDate,
  filterOrdersByPhone,
  getOrdersFail,
  getOrdersSuccess,
} from '../ordersActions/ordersActions';
import { OrdersState } from '../types/OrdersState';

const OrdersState: OrdersState = {
  orders: [],
  errors: null,
  filteredOrders: [],
};

export const ordersReducer = createReducer(
  OrdersState,
  on(getOrdersSuccess, (state: OrdersState, action) => ({
    ...state,
    orders: action.orders,
    filteredOrders: action.orders,
  })),
  on(getOrdersFail, (state: OrdersState, action) => ({
    ...state,
    errors: action.errors,
  })),
  on(filterOrdersByPhone, (state: OrdersState, action) => ({
    ...state,
    filteredOrders: FilterOrdersByPhone(state, action.phone),
  })),
  on(filterOrdersByDate, (state: OrdersState, action) => ({
    ...state,
    filteredOrders: FilterOrdersByDate(state, action.time),
  }))
);

function FilterOrdersByPhone(state: OrdersState, action: string) {
  if (action.toLowerCase() === '') {
    return state.orders;
  }

  return state.orders.filter((order) =>
    order.phone.startsWith(action.toLowerCase())
  );
}

function FilterOrdersByDate(state: OrdersState, action: string) {
  if (action.toLowerCase() === '5') {
    return state.orders.filter((order) => dateDifference(order.time) <= 5);
  } else if (action.toLowerCase() === '7') {
    return state.orders.filter((order) => dateDifference(order.time) <= 7);
  } else if (action.toLowerCase() === '15') {
    return state.orders.filter((order) => dateDifference(order.time) <= 15);
  } else if (action.toLowerCase() === '30') {
    return state.orders.filter((order) => dateDifference(order.time) <= 30);
  }

  return state.orders;
}

function dateDifference(date: string) {
  let dateFromStore = date;
  var eventdate = moment(dateFromStore, 'YYYY-MM-DD');
  var todaysdate = moment(new Date(), 'YYYY-MM-DD');
  return todaysdate.diff(eventdate, 'days');
}
