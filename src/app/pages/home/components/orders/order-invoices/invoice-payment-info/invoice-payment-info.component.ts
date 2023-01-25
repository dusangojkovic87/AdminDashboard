import { Component, Input, OnInit } from '@angular/core';
import { CustomerOrder } from '../../../customer-order-list/types/CustomerOrder';

@Component({
  selector: 'app-invoice-payment-info',
  templateUrl: './invoice-payment-info.component.html',
  styleUrls: ['./invoice-payment-info.component.scss'],
})
export class InvoicePaymentInfoComponent implements OnInit {
  @Input('order') order!: CustomerOrder;

  constructor() {}

  ngOnInit(): void {}
}
