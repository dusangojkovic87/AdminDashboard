import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
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
  time: string = '5';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  filterOrdersByPhone() {
    this.store.dispatch(filterOrdersByPhone({ phone: this.phone }));
  }

  filterOrdersByDate() {
    this.store.dispatch(filterOrdersByDate({ time: this.time }));
  }
}
