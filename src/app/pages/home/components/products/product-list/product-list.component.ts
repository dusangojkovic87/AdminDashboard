import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  getProducts,
  setPublishProductStatusToDefault,
} from '../productActions/productActions';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  p: number = 0;
  productSub?: Subscription;
  notificationStoreSub!: Subscription;

  productList: Array<Product> = [];

  constructor(
    private store: Store<AppState>,
    private notifer: NotifierService
  ) {}

  ngOnInit(): void {
    this.getProductsFromStore();
    this.publishProductChangedNotification();
  }

  getProductsFromStore() {
    this.store.dispatch(getProducts());
    this.productSub = this.store
      .select((state) => state.productsState.filteredProducts)
      .subscribe((data: Product[]) => {
        this.productList = data;
      });
  }

  publishProductChangedNotification() {
    this.notificationStoreSub = this.store
      .select((state) => state.productsState.isProductPublishingChanged)
      .subscribe((isPublishedChanged) => {
        if (isPublishedChanged) {
          this.notifer.notify('success', 'publish product status changed');
          this.store.dispatch(setPublishProductStatusToDefault());
        }
      });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
    this.notificationStoreSub.unsubscribe();
  }
}
