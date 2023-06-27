import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  openEditProductModal,
  togglePublishProduct,
} from '../../../products/productActions/productActions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { Product } from '../../../products/types/Product';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit {
  @Input('product') product?: any;
  publishProductFormGroup!: FormGroup;
  storeSub!: Subscription;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.publishProductFormGroup = this.fb.group({
      isPublished: [this.product?.published, Validators.required],
    });
  }

  openEditProductModal(product: Product) {
    this.store.dispatch(openEditProductModal({ product: product }));
  }

  togglePublishProduct(product: Product) {
    this.store.dispatch(
      togglePublishProduct({
        productId: product.id,
        isPublished: this.publishProductFormGroup.value,
      })
    );
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
