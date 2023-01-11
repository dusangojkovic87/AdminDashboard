import { createReducer, on } from '@ngrx/store';
import {
  getCustomersFail,
  getCustomersSuccess,
} from '../customersActions/customersActions';
import { CustomersState } from '../types/CustomersState';

const CustomersState: CustomersState = {
  customers: null,
  errors: null,
};

export const customersReducer = createReducer(
  CustomersState,
  on(getCustomersSuccess, (state: CustomersState, action) => ({
    ...state,
    customers: action.customers,
  })),
  on(getCustomersFail, (state: CustomersState, action) => ({
    ...state,
    errors: action.errors,
  }))
);
