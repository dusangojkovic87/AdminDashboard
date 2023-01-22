import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeEditProductModal,
  getProducts,
  openEditProductModal,
} from '../productActions/productActions';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  storeSub!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.store.dispatch(getProducts());
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.storeSub = this.store
        .select((state) => state.productsState.products)
        .subscribe((data: Product[]) => {
          let productDetails = data.filter((p) => p.id === +params['id']);
          this.product = productDetails[0];
        });
    });
  }

  openEditProductModal(product: Product) {
    this.store.dispatch(openEditProductModal({ product: product }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(closeEditProductModal());
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
