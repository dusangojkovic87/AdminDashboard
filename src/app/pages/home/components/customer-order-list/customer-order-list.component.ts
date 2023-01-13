import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { getCustomerOrder } from './customerOrderActions/customerOrderActions';

@Component({
  selector: 'app-customer-order-list',
  templateUrl: './customer-order-list.component.html',
  styleUrls: ['./customer-order-list.component.scss'],
})
export class CustomerOrderListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] != null || params['id'] != undefined) {
        let id = params['id'];
        this.store.dispatch(getCustomerOrder({ id: +id }));
      }
    });
  }
}
