import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { getProducts } from '../productActions/productActions';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  p: number = 0;
  productSub?: Subscription;

  productList: Array<Product> = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getProductsFromStore();
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  getProductsFromStore() {
    this.store.dispatch(getProducts());
    this.productSub = this.store
      .select((state) => state.productsState.products)
      .subscribe((data: Product[]) => {
        this.productList = data;
      });
  }
}
