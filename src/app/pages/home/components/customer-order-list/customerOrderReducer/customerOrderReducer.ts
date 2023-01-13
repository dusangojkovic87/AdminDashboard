import { createReducer, on } from '@ngrx/store';
import {
  clearCustomerOrdersFromStore,
  getCustomerOrderFail,
  getCustomerOrderSuccess,
} from '../customerOrderActions/customerOrderActions';
import { CustomerOrdersState } from '../types/CustomerOrdersState';

const CustomerOrdersState: CustomerOrdersState = {
  orders: null,
  errors: null,
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
  }))
);
