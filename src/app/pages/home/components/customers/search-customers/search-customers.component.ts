import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { filterCustomersByName } from '../customersActions/customersActions';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.scss'],
})
export class SearchCustomersComponent implements OnInit {
  name: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  filterCustomersByNameAction() {
    this.store.dispatch(filterCustomersByName({ name: this.name }));
  }
}
