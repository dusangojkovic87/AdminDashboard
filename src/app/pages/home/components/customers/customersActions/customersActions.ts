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

export const openDeleteCustomersModal = createAction(
  customersActionTypes.OPEN_DELETE_CUSTOMER_MODAL,
  props<{ id: number }>()
);

export const closeDeleteCustomersModal = createAction(
  customersActionTypes.CLOSE_DELETE_CUSTOMERS_MODAL
);

export const deleteCustomer = createAction(
  customersActionTypes.DELETE_CUSTOMER
);

export const deleteCustomerFail = createAction(
  customersActionTypes.DELETE_CUSTOMER_FAIL,
  props<{ error: any }>()
);

export const deleteCustomerSuccess = createAction(
  customersActionTypes.DELETE_CUSTOMER_SUCCESS
);
