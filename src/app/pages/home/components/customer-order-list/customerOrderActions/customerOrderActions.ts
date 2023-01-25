import { createAction, props } from '@ngrx/store';
import { productActionTypes } from '../../products/productActionTypes/productActionTypes';
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

export const clearCustomerOrdersFromStore = createAction(
  customerOrderActionTypes.CLEAR_CUSTOMER_ORDERS_FROM_STORE
);
