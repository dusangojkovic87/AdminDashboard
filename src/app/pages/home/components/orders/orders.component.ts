import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';
import { AppState } from 'src/app/appReducer/appReducer';
import { CustomerOrder } from '../customer-order-list/types/CustomerOrder';
import {
  getOrders,
  setOrderStatusToDefault,
} from './ordersActions/ordersActions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: CustomerOrder[] = [];
  p: number = 1;

  constructor(
    private store: Store<AppState>,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.getOrdersAction();
    this.getOrdersFromStore();
    this.isOrderStatusChangedNotification();
  }

  getOrdersAction() {
    this.store.dispatch(getOrders());
  }

  getOrdersFromStore() {
    this.store
      .select((state) => state.ordersState.filteredOrders)
      .subscribe((data) => {
        if (data) {
          this.orders = data;
        }
      });
  }

  isOrderStatusChangedNotification() {
    this.store
      .select((state) => state.ordersState.isOrderStatusChanged)
      .subscribe((isStatusChanged) => {
        console.log(isStatusChanged);

        if (isStatusChanged) {
          this.notifier.notify('success', 'order status changed');
          this.store.dispatch(setOrderStatusToDefault());
        }
      });
  }
}
