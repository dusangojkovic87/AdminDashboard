import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  clearCustomerOrdersFromStore,
  getCustomerOrder,
} from './customerOrderActions/customerOrderActions';
import { CustomerOrder } from './types/CustomerOrder';

@Component({
  selector: 'app-customer-order-list',
  templateUrl: './customer-order-list.component.html',
  styleUrls: ['./customer-order-list.component.scss'],
})
export class CustomerOrderListComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}
  orders: CustomerOrder[] = [];

  ngOnInit(): void {
    this.getCustomerOrderByIdAction();
    this.getCustomerOrdersFromStore();
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
  }
}
