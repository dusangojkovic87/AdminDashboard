import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  addProductModal,
  closeProductsModal,
} from '../productActions/productActions';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  public isProductModalOpen: boolean = false;

  addProductForm!: FormGroup;
  public productImageName: string | null = null;
  public fileNotSupported: boolean | null = null;
  public isImageOverInput: boolean = false;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.store
      .select((state) => state.productsState.isAddProductModalOpen)
      .subscribe((data) => {
        this.isProductModalOpen = data;
      });
  }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productImage: [null],
      productName: ['', Validators.required],
      productDetails: ['', Validators.required],
      category: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  AddProduct() {
    if (this.addProductForm.valid) {
      //dispatch store action to post product here
      this.store.dispatch(
        addProductModal({ product: this.addProductForm.value })
      );
      this.addProductForm.reset();
    }
  }

  productImageDropped($event: { file: File | null; fileSupported: boolean }) {
    if ($event.file != null && $event.fileSupported) {
      this.fileNotSupported = false;
      this.productImageName = $event.file.name;
      this.addProductForm.patchValue({ productImage: $event });
    } else {
      this.fileNotSupported = true;
    }
  }

  imageOverInput($event: boolean) {
    this.isImageOverInput = $event;
  }

  closeAddProductModal() {
    this.store.dispatch(closeProductsModal());
  }
}
