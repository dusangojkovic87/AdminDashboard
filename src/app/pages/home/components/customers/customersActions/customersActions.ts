import { createAction, props } from '@ngrx/store';
import { customersActionTypes } from '../customersActionTypes/customersActionTypes';

export const getCustomers = createAction(customersActionTypes.GET_CUSTOMERS);

export const getCustomersSuccess = createAction(
  customersActionTypes.GET_CUSTOMERS_SUCCESS,
  props<{ customers: any }>()
);

export const getCustomersFail = createAction(
  customersActionTypes.GET_CUSTOMERS_FAIL,
  props<{ errors: any }>()
);
