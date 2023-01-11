import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { getCustomers } from '../customersActions/customersActions';
import { CustomersData } from '../types/CustomersData';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  customers?: CustomersData[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCustomersFromStore();
  }

  getCustomersFromStore() {
    this.store.dispatch(getCustomers());
    this.store
      .select((state) => state.customersState.customers)
      .subscribe((data) => {
        console.log(data);

        if (data != null) {
          this.customers = data;
        }
      });
  }
}
