import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { last, skip, Subscription, take } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  orderStatusChanged,
  setOrderStatusMessageToDefault,
} from '../customerOrderActions/customerOrderActions';
import { CustomerOrder } from '../types/CustomerOrder';

@Component({
  selector: 'app-customer-order-item',
  templateUrl: './customer-order-item.component.html',
  styleUrls: ['./customer-order-item.component.scss'],
})
export class CustomerOrderItemComponent implements OnInit, OnDestroy {
  @Input('order') order?: CustomerOrder;
  status: string = 'pending';
  storeSub!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  orderStatusChanged(order: CustomerOrder) {
    this.store.dispatch(
      orderStatusChanged({ id: order.id, status: this.status })
    );
  }

  ngOnDestroy(): void {
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
