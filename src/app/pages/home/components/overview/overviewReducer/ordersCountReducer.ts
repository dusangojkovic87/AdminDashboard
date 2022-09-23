import { createReducer, on } from '@ngrx/store';
import {
  getOrderCountDetailsFail,
  getOrderCountDetailsSuccess,
} from '../overviewActions/overviewActions';
import { OrdersCountDetailsState } from '../types/OrdersCountDetailsState';

const orderCountState: OrdersCountDetailsState = {
  totalOrder: 0,
  ordersPending: 0,
  ordersDelivered: 0,
  ordersProcessing: 0,
  errors: '',
};

export const ordersCountReducer = createReducer(
  orderCountState,
  on(getOrderCountDetailsSuccess, (state: OrdersCountDetailsState, action) => ({
    ...state,
    totalOrder: action.data.totalOrder,
    ordersPending: action.data.ordersPending,
    ordersDelivered: action.data.ordersDelivered,
    ordersProcessing: action.data.ordersProcessing,
    errors: '',
  })),
  on(getOrderCountDetailsFail, (state: OrdersCountDetailsState, action) => ({
    ...state,
    errors: action.error,
  }))
);
