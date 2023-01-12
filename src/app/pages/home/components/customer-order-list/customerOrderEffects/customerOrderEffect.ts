import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import {
  getCustomerOrder,
  getCustomerOrderFail,
  getCustomerOrderSuccess,
} from '../customerOrderActions/customerOrderActions';
import { customerOrderActionTypes } from '../customerOrderActionTypes/customerOrderActionTypes';
import { CustomerOrdersService } from '../services/customer-orders.service';
import { CustomerOrder } from '../types/CustomerOrder';

export class CustomerOrderEffect {
  constructor(
    private $actions: Actions,
    private customerOrdersService: CustomerOrdersService
  ) {}

  $getOrderByCustomerId = createEffect(() =>
    this.$actions.pipe(
      ofType(customerOrderActionTypes.GET_CUSTOMER_ORDERS),
      switchMap((id: number) => {
        return this.customerOrdersService
          .getOrders()
          .pipe(
            map((data: CustomerOrder[]) =>
              data.filter((x) => x.customerId === id)
            )
          );
      }),
      map((data) => {
        return getCustomerOrderSuccess({ orders: data });
      }),
      catchError((error) => {
        return of(getCustomerOrderFail({ error: error }));
      })
    )
  );
}
