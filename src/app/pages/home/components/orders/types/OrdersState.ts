import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';

export interface OrdersState {
  orders: CustomerOrder[];
  errors: string[] | null;
  filteredOrders: CustomerOrder[];
}
