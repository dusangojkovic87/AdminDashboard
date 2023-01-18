import { authReducer } from '../pages/auth/authReducer/auth.reducer';
import { AuthStateInterface } from '../pages/auth/types/AuthStateInterface';
import { categoryReducer } from '../pages/home/components/category/categoryReducer/categoryReducer';
import { CategoryState } from '../pages/home/components/category/types/CategoryState';
import { customerOrdersReducer } from '../pages/home/components/customer-order-list/customerOrderReducer/customerOrderReducer';
import { CustomerOrdersState } from '../pages/home/components/customer-order-list/types/CustomerOrdersState';
import { customersReducer } from '../pages/home/components/customers/customersReducer/customersReducer';
import { CustomersState } from '../pages/home/components/customers/types/CustomersState';
import { ordersReducer } from '../pages/home/components/orders/ordersReducer/ordersReducer';
import { OrdersState } from '../pages/home/components/orders/types/OrdersState';
import { ordersCountReducer } from '../pages/home/components/overview/overviewReducer/ordersCountReducer';
import { overviewReducer } from '../pages/home/components/overview/overviewReducer/overviewReducer';
import { recentOrdersReducer } from '../pages/home/components/overview/overviewReducer/recentOrdersReducer';
import { AmountDetailsState } from '../pages/home/components/overview/types/AmountDetailsState';
import { OrdersCountDetailsState } from '../pages/home/components/overview/types/OrdersCountDetailsState';
import { RecentOrdersState } from '../pages/home/components/overview/types/RecentOrdersState';
import { productsReducer } from '../pages/home/components/products/productReducer/productsReducer';
import { ProductListState } from '../pages/home/components/products/types/ProductsListState';
import { headerReducer } from '../Shared/sharedReducer/headerReducer';
import { HeaderInterfaceState } from '../Shared/types/headerInterfaceState';

export interface AppState {
  headerState: HeaderInterfaceState;
  authState: AuthStateInterface;
  amountDetailsState: AmountDetailsState;
  ordersCountState: OrdersCountDetailsState;
  recentOrdersState: RecentOrdersState;
  productsState: ProductListState;
  categoryState: CategoryState;
  customersState: CustomersState;
  customerOrdersState: CustomerOrdersState;
  ordersState: OrdersState;
}

export const appReducer = {
  headerState: headerReducer,
  authState: authReducer,
  amountDetailsState: overviewReducer,
  ordersCountState: ordersCountReducer,
  recentOrdersState: recentOrdersReducer,
  productsState: productsReducer,
  categoryState: categoryReducer,
  customersState: customersReducer,
  customerOrdersState: customerOrdersReducer,
  ordersState: ordersReducer,
};
