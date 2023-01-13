import { Component, Input, OnInit } from '@angular/core';
import { CustomerOrder } from '../types/CustomerOrder';

@Component({
  selector: 'app-customer-order-item',
  templateUrl: './customer-order-item.component.html',
  styleUrls: ['./customer-order-item.component.scss'],
})
export class CustomerOrderItemComponent implements OnInit {
  @Input('order') order?: CustomerOrder;

  constructor() {}

  ngOnInit(): void {}
}
