import moment from 'moment';
import { createReducer, on } from '@ngrx/store';
import {
  customerOrderStatusChangedSuccess,
  downloadPdf,
  filterByOrderStatus,
  filterOrdersByDate,
  filterOrdersByPhone,
  getOrdersFail,
  getOrdersSuccess,
  setDownloadPdfToFalse,
  setOrderStatusToDefault,
} from '../ordersActions/ordersActions';
import { OrdersState } from '../types/OrdersState';

const OrdersState: OrdersState = {
  orders: [],
  errors: null,
  filteredOrders: [],
  isOrderStatusChanged: false,
  downloadInvoices: false,
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
  })),
  on(filterByOrderStatus, (state: OrdersState, action) => ({
    ...state,
    filteredOrders: FilterByOrderStatus(state, action.status),
  })),
  on(customerOrderStatusChangedSuccess, (state: OrdersState, action) => ({
    ...state,
    isOrderStatusChanged: action.isStatusChanged,
  })),
  on(setOrderStatusToDefault, (state: OrdersState, action) => ({
    ...state,
    isOrderStatusChanged: false,
  })),
  on(downloadPdf, (state: OrdersState, action) => ({
    ...state,
    downloadInvoices: true,
  })),
  on(setDownloadPdfToFalse, (state: OrdersState, action) => ({
    ...state,
    downloadInvoices: false,
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
  if (action.toLowerCase() === '') {
    return state.orders;
  } else if (action.toLowerCase() === '5') {
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

function FilterByOrderStatus(state: OrdersState, action: string) {
  if (action.toLowerCase() === '') {
    return state.orders;
  }

  return state.orders.filter(
    (x) => x.status.toLowerCase() === action.toLowerCase()
  );
}
