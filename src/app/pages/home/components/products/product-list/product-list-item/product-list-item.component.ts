import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  openEditProductModal,
  setPublishProductStatusToDefault,
  togglePublishProduct,
} from '../../productActions/productActions';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit, OnDestroy {
  @Input('product') product!: any;
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
