import { createAction, props } from '@ngrx/store';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';
import { ordersActionTypes } from '../ordersActionTypes/ordersActionsTypes';

export const getOrders = createAction(ordersActionTypes.GET_ORDERS);

export const getOrdersSuccess = createAction(
  ordersActionTypes.GET_ORDERS_SUCCESS,
  props<{ orders: CustomerOrder[] }>()
);

export const getOrdersFail = createAction(
  ordersActionTypes.GET_ORDERS_FAIL,
  props<{ errors: any }>()
);

export const filterOrdersByPhone = createAction(
  ordersActionTypes.FILTER_ORDERS_BY_PHONE,
  props<{ phone: string }>()
);

export const filterOrdersByDate = createAction(
  ordersActionTypes.FILTER_ORDERS_BY_DATE,
  props<{ time: string }>()
);
