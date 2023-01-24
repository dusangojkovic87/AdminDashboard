import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  filterByOrderStatus,
  filterOrdersByDate,
  filterOrdersByPhone,
} from '../ordersActions/ordersActions';

@Component({
  selector: 'app-orders-filter-search',
  templateUrl: './orders-filter-search.component.html',
  styleUrls: ['./orders-filter-search.component.scss'],
})
export class OrdersFilterSearchComponent implements OnInit {
  phone: string = '';
  time: string = '';
  status: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  filterOrdersByPhone() {
    this.store.dispatch(filterOrdersByPhone({ phone: this.phone }));
  }

  filterOrdersByDate() {
    this.store.dispatch(filterOrdersByDate({ time: this.time }));
  }

  filterByOrderStatus() {
    this.store.dispatch(filterByOrderStatus({ status: this.status }));
  }
}
