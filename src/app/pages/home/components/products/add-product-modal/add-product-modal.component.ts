import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { closeProductsModal } from '../productActions/productActions';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  public isProductModalOpen: boolean = false;
  constructor(private store: Store<AppState>) {
    this.store
      .select((state) => state.productsState.isAddProductModalOpen)
      .subscribe((data) => {
        this.isProductModalOpen = data;
      });
  }

  ngOnInit(): void {}

  closeAddProductModal() {
    this.store.dispatch(closeProductsModal());
  }
}
