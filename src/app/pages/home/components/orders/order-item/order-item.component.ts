import { Component, Input, OnInit } from '@angular/core';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input('order') order?: CustomerOrder;

  constructor() {}

  ngOnInit(): void {}
}
