import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { getOrderCountDetails } from '../overviewActions/overviewActions';
import { AmountCountDetails } from '../types/AmountCountDetails';
import { OrdersCountDetailsState } from '../types/OrdersCountDetailsState';

@Component({
  selector: 'app-orders-count-info',
  templateUrl: './orders-count-info.component.html',
  styleUrls: ['./orders-count-info.component.scss'],
})
export class OrdersCountInfoComponent implements OnInit, OnDestroy {
  ordersCountSub?: Subscription;
  orderCountDetails?: AmountCountDetails;
  constructor(private store: Store<AppState>) {
    this.store.dispatch(getOrderCountDetails());
  }

  ngOnInit(): void {
    this.ordersCountSub = this.store
      .select((state) => state.ordersCountState)
      .subscribe((data: AmountCountDetails) => {
        if (data) {
          this.orderCountDetails = data;
        }
      });
  }

  ngOnDestroy(): void {
    this.ordersCountSub?.unsubscribe();
  }
}
