import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { CustomerOrder } from '../customer-order-list/types/CustomerOrder';
import { getOrders } from './ordersActions/ordersActions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: CustomerOrder[] = [];
  p: number = 1;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getOrdersAction();
    this.getOrdersFromStore();
  }

  getOrdersAction() {
    this.store.dispatch(getOrders());
  }

  getOrdersFromStore() {
    this.store
      .select((state) => state.ordersState.orders)
      .subscribe((data) => {
        if (data) {
          this.orders = data;
        }
      });
  }
}
