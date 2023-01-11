import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getCustomers,
  getCustomersFail,
  getCustomersSuccess,
} from '../customersActions/customersActions';
import { CustomersService } from '../services/customers.service';
import { CustomersData } from '../types/CustomersData';

@Injectable()
export class CustomersEffect {
  constructor(
    private $actions: Actions,
    private customerService: CustomersService
  ) {}

  $getCustomers = createEffect(() =>
    this.$actions.pipe(
      ofType(getCustomers),
      switchMap(() => {
        return this.customerService.getCustomers();
      }),
      map((data: CustomersData[]) => {
        return getCustomersSuccess({ customers: data });
      }),
      catchError((error) => {
        return of(getCustomersFail({ errors: error }));
      })
    )
  );
}
