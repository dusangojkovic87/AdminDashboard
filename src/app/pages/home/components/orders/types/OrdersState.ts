import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';

export interface OrdersState {
  orders: CustomerOrder[] | null;
  errors: string[] | null;
}
