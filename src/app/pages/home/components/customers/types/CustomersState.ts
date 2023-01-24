import { CustomersData } from './CustomersData';

export interface CustomersState {
  customers: CustomersData[];
  errors: string | null;
  filteredCustomers: CustomersData[];
}
