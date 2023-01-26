import { createAction, props } from '@ngrx/store';
import { customersActionTypes } from '../../customers/customersActionTypes/customersActionTypes';
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

export const orderStatusChanged = createAction(
  customerOrderActionTypes.ORDER_STATUS_CHANGED,
  props<{ id: number; status: string }>()
);

export const orderStatusChangedSuccess = createAction(
  customerOrderActionTypes.ORDER_STATUS_CHANGED_SUCCESS,
  props<{ isStatusChanged: boolean }>()
);

export const orderStatusChangedFail = createAction(
  customerOrderActionTypes.ORDER_STATUS_CHANGED_FAIL,
  props<{ error: any }>()
);

export const setOrderStatusMessageToDefault = createAction(
  customerOrderActionTypes.SET_ORDER_STATUS_MESSAGE_TO_DEFAULT
);
