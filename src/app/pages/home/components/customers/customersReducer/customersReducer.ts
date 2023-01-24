import { createReducer, on } from '@ngrx/store';
import {
  filterCustomersByName,
  getCustomersFail,
  getCustomersSuccess,
} from '../customersActions/customersActions';
import { CustomersState } from '../types/CustomersState';

const CustomersState: CustomersState = {
  customers: [],
  errors: null,
  filteredCustomers: [],
};

export const customersReducer = createReducer(
  CustomersState,
  on(getCustomersSuccess, (state: CustomersState, action) => ({
    ...state,
    customers: action.customers,
    filteredCustomers: action.customers,
  })),
  on(getCustomersFail, (state: CustomersState, action) => ({
    ...state,
    errors: action.errors,
  })),
  on(filterCustomersByName, (state: CustomersState, action) => ({
    ...state,
    filteredCustomers: FilterByName(state, action.name),
  }))
);

function FilterByName(state: CustomersState, action: string) {
  if (action.toLowerCase() === '') {
    return state.customers;
  }

  return state.customers.filter((customer) =>
    customer.name.toLowerCase().includes(action.toLowerCase())
  );
}
