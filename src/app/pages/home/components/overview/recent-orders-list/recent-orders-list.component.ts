import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DefaultConfig } from 'ngx-easy-table';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { getRecentOrders } from '../overviewActions/recentOrdersActions';
import { RecentOrders } from '../types/recentOrders';

@Component({
  selector: 'app-recent-orders-list',
  templateUrl: './recent-orders-list.component.html',
  styleUrls: ['./recent-orders-list.component.scss'],
})
export class RecentOrdersListComponent implements OnInit, OnDestroy {
  public configuration = { ...DefaultConfig };
  public columns = [
    { key: 'orderTime', title: 'Order Time' },
    { key: 'deliveryAdress', title: 'Delivery adress' },
    { key: 'phone', title: 'phone' },
    { key: 'paymentMethod', title: 'Payment method' },
    { key: 'orderStatus', title: 'Status' },
  ];

  /* public data = [
    {
      orderTime: '12/12/2021',
      deliveryAdress: 'St.Jorge street',
      phone: '1324646678',
      paymentMethod: 'COD',
      orderAmount: 123,
      orderStatus: 'pending',
    },
  ];
  */

  public data: any;
  recentOrdersSub?: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getRecentOrders());
    this.recentOrdersSub = this.store
      .select((state) => state.recentOrdersState.recentOrders)
      .subscribe((data) => {
        this.data = data;
      });
  }

  ngOnDestroy(): void {
    this.recentOrdersSub?.unsubscribe();
  }
}
