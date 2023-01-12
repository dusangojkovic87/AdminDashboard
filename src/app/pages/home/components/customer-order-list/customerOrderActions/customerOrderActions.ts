import { createAction, props } from '@ngrx/store';
import { customerOrderActionTypes } from '../customerOrderActionTypes/customerOrderActionTypes';
import { CustomerOrder } from '../types/CustomerOrder';

export const getCustomerOrder = createAction(
  customerOrderActionTypes.GET_CUSTOMER_ORDERS,
  props<{ id: number }>()
);

export const getCustomerOrderSuccess = createAction(
  customerOrderActionTypes.GET_CUSTOMER_ORDERS_SUCCESS,
  props<{ orders: CustomerOrder[] }>()
);

export const getCustomerOrderFail = createAction(
  customerOrderActionTypes.GET_CUSTOMER_ORDERS_FAIL,
  props<{ error: any }>()
);
