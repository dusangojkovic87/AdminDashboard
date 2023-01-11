import { CustomersData } from './CustomersData';

export interface CustomersState {
  customers: CustomersData[] | null;
  errors: string | null;
}
