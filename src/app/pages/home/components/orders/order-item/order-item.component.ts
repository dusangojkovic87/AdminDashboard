import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';
import { AppState } from 'src/app/appReducer/appReducer';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';
import { customerOrderStatusChanged } from '../ordersActions/ordersActions';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input('order') order?: CustomerOrder;

  orderStatusFormGroup!: FormGroup;

  constructor(
    private router: Router,
    private notifier: NotifierService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.orderStatusFormGroup = this.fb.group({
      status: ['', Validators.required],
    });

    if (this.order)
      this.orderStatusFormGroup.patchValue({ status: this.order.status });
  }

  redirectToInvoices(order: CustomerOrder) {
    this.router.navigate(['/orders/invoices', order.id]);
  }

  orderStatusChanged(order: CustomerOrder) {
    console.log(this.orderStatusFormGroup.value);
    this.store.dispatch(
      customerOrderStatusChanged({
        order: order,
        newStatus: this.orderStatusFormGroup.value,
      })
    );
  }
}
