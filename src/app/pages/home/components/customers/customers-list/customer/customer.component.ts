import { Component, Input, OnInit } from '@angular/core';
import { CustomersData } from '../../types/CustomersData';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { openDeleteCustomersModal } from '../../customersActions/customersActions';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  @Input('customer') customer?: CustomersData;

  constructor(private store: Store<AppState>) {}

  openDeleteCustomerModal(id: number) {
    this.store.dispatch(openDeleteCustomersModal({ id: id }));
  }

  ngOnInit(): void {}
}
