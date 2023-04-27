import { createReducer, on } from '@ngrx/store';
import {
  closeDeleteCustomersModal,
  filterCustomersByName,
  getCustomersFail,
  getCustomersSuccess,
  openDeleteCustomersModal,
} from '../customersActions/customersActions';
import { CustomersState } from '../types/CustomersState';

const CustomersState: CustomersState = {
  customers: [],
  errors: null,
  filteredCustomers: [],
  customerToDelete: 0,
  isDeleteCustomerModalOpen: false,
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
  })),
  on(openDeleteCustomersModal, (state: CustomersState, action) => ({
    ...state,
    customerToDelete: action.id,
    isDeleteCustomerModalOpen: true,
  })),
  on(closeDeleteCustomersModal, (state: CustomersState, action) => ({
    ...state,
    customerToDelete: 0,
    isDeleteCustomerModalOpen: false,
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
