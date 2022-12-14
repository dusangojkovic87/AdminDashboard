import { authReducer } from '../pages/auth/authReducer/auth.reducer';
import { AuthStateInterface } from '../pages/auth/types/AuthStateInterface';
import { categoryReducer } from '../pages/home/components/category/categoryReducer/categoryReducer';
import { CategoryState } from '../pages/home/components/category/types/CategoryState';
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
}

export const appReducer = {
  headerState: headerReducer,
  authState: authReducer,
  amountDetailsState: overviewReducer,
  ordersCountState: ordersCountReducer,
  recentOrdersState: recentOrdersReducer,
  productsState: productsReducer,
  categoryState: categoryReducer,
};
