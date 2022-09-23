import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { getAmountDetailsAction } from '../overviewActions/overviewActions';
import { AmountDetails } from '../types/AmountDetails';

@Component({
  selector: 'app-orders-amount-overview',
  templateUrl: './orders-amount-overview.component.html',
  styleUrls: ['./orders-amount-overview.component.scss'],
})
export class OrdersAmountOverviewComponent implements OnInit, OnDestroy {
  amountSub?: Subscription;
  amountDetails?: AmountDetails;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getAmountDetailsAction());
    this.amountSub = this.store
      .select((state) => state.amountDetailsState)
      .subscribe((data: AmountDetails) => {
        this.amountDetails = data;
      });
  }

  ngOnDestroy(): void {
    this.amountSub?.unsubscribe();
  }
}
