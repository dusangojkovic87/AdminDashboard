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

export const filterCustomersByName = createAction(
  customersActionTypes.FILTER_CUSTOMERS_BY_NAME,
  props<{ name: string }>()
);
