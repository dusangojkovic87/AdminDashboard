import { CustomerOrder } from './CustomerOrder';

export interface CustomerOrdersState {
  orders: CustomerOrder[] | null;
  errors: string | null;
}
