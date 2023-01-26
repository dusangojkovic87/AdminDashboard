import { createReducer, on } from '@ngrx/store';
import {
  clearCustomerOrdersFromStore,
  getCustomerOrderFail,
  getCustomerOrderSuccess,
  orderStatusChanged,
  orderStatusChangedFail,
  orderStatusChangedSuccess,
  setOrderStatusMessageToDefault,
} from '../customerOrderActions/customerOrderActions';
import { CustomerOrdersState } from '../types/CustomerOrdersState';

const CustomerOrdersState: CustomerOrdersState = {
  orders: null,
  errors: null,
  isStatusChanged: false,
};

export const customerOrdersReducer = createReducer(
  CustomerOrdersState,
  on(getCustomerOrderSuccess, (state: CustomerOrdersState, action) => ({
    ...state,
    orders: action.orders,
  })),
  on(clearCustomerOrdersFromStore, (state: CustomerOrdersState, action) => ({
    ...state,
    orders: null,
  })),
  on(getCustomerOrderFail, (state: CustomerOrdersState, action) => ({
    ...state,
    errors: action.error,
  })),
  on(orderStatusChangedSuccess, (state: CustomerOrdersState, action) => ({
    ...state,
    isStatusChanged: action.isStatusChanged,
  })),
  on(orderStatusChangedFail, (state: CustomerOrdersState, action) => ({
    ...state,
    errors: action.error,
  })),
  on(setOrderStatusMessageToDefault, (state: CustomerOrdersState, action) => ({
    ...state,
    isStatusChanged: false,
  }))
);
