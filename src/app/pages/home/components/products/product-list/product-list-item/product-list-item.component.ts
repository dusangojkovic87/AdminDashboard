import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { openEditProductModal } from '../../productActions/productActions';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  @Input('product') product?: Product;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  openEditProductModal(product: Product) {
    this.store.dispatch(openEditProductModal({ product: product }));
  }
}
