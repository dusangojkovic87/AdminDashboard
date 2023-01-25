import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';
import { getOrders } from '../ordersActions/ordersActions';

@Component({
  selector: 'app-order-invoices',
  templateUrl: './order-invoices.component.html',
  styleUrls: ['./order-invoices.component.scss'],
})
export class OrderInvoicesComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
  routeSub!: Subscription;
  order!: CustomerOrder;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getOrderById();
  }

  getOrderById() {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.store.dispatch(getOrders());
        this.storeSub = this.store
          .select((state) => state.ordersState.orders)
          .pipe(map((orders) => orders.find((x) => x.id === +params['id'])))
          .subscribe((data: any) => {
            if (data) this.order = data;
          });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.storeSub && this.routeSub) {
      this.storeSub.unsubscribe();
      this.routeSub.unsubscribe();
    }
  }
}
