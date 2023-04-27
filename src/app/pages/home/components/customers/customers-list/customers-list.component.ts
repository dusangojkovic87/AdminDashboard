import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeDeleteCustomersModal,
  deleteCustomer,
  getCustomers,
} from '../customersActions/customersActions';
import { CustomersData } from '../types/CustomersData';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  customers: CustomersData[] = [];
  p: number = 1;
  storeSub?: Subscription;
  customerStoreSub?: Subscription;
  isDeleteModalOpen: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCustomersFromStore();
    this.isDeleteCustomerModalOpen();
  }

  getCustomersFromStore() {
    this.store.dispatch(getCustomers());
    this.storeSub = this.store
      .select((state) => state.customersState.filteredCustomers)
      .subscribe((data) => {
        if (data != null) {
          this.customers = data;
        }
      });
  }

  isDeleteCustomerModalOpen() {
    this.store
      .select((state) => state.customersState.isDeleteCustomerModalOpen)
      .subscribe((data) => {
        this.isDeleteModalOpen = data;
      });
  }

  closeDeleteModal() {
    this.store.dispatch(closeDeleteCustomersModal());
  }

  deleteCustomerRecord() {
    this.customerStoreSub = this.store
      .select((state) => state.customersState.customerToDelete)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(deleteCustomer({ id: id }));
        }
      });

    this.customerStoreSub.unsubscribe();
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub?.unsubscribe();
    }
  }
}
