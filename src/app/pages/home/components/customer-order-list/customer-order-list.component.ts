import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  clearCustomerOrdersFromStore,
  getCustomerOrder,
  setOrderStatusMessageToDefault,
} from './customerOrderActions/customerOrderActions';
import { CustomerOrder } from './types/CustomerOrder';

@Component({
  selector: 'app-customer-order-list',
  templateUrl: './customer-order-list.component.html',
  styleUrls: ['./customer-order-list.component.scss'],
})
export class CustomerOrderListComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private notifier: NotifierService
  ) {}
  orders: CustomerOrder[] = [];
  p: number = 1;
  storeSub!: Subscription;

  ngOnInit(): void {
    this.getCustomerOrderByIdAction();
    this.getCustomerOrdersFromStore();
    this.showOrderStatusChangeMessage();
  }

  getCustomerOrderByIdAction() {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] != null || params['id'] != undefined) {
        let id = params['id'];
        this.store.dispatch(getCustomerOrder({ id: +id }));
      }
    });
  }

  getCustomerOrdersFromStore() {
    this.store
      .select((state) => state.customerOrdersState.orders)
      .subscribe((orders: CustomerOrder[] | null) => {
        if (orders) this.orders = orders;
      });
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearCustomerOrdersFromStore());
    if (this.storeSub) this.storeSub.unsubscribe();
  }

  showOrderStatusChangeMessage() {
    this.storeSub = this.store
      .select((state) => state.customerOrdersState.isStatusChanged)
      .subscribe((isStatusChanged) => {
        if (isStatusChanged) {
          this.notifier.notify('success', 'status changed');
          this.store.dispatch(setOrderStatusMessageToDefault());
        }
      });
  }
}
