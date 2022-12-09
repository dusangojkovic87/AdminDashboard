import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeEditProductModal,
  editProduct,
  openEditProductModal,
} from '../productActions/productActions';
import { Product } from '../types/Product';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss'],
})
export class EditProductModalComponent implements OnInit {
  editProductForm!: FormGroup;
  public isEditProductModalOpen: boolean = false;
  @Input() product?: Product;

  public productImageName: string | null = null;
  public fileNotSupported: boolean | null = null;
  public isImageOverInput: boolean = false;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.store
      .select((state) => state.productsState.isEditProductModalOpen)
      .subscribe((data) => {
        this.isEditProductModalOpen = data;
      });
  }

  ngOnInit(): void {
    this.editProductForm = this.fb.group({
      productImage: [null],
      productName: [this.product?.productName, Validators.required],
      productDetails: [this.product?.details, Validators.required],
      category: [this.product?.category, Validators.required],
      unit: [this.product?.unit, Validators.required],
      quantity: [this.product?.quantity, Validators.required],
      price: [this.product?.price, Validators.required],
    });
  }

  EditProduct() {
    if (this.editProductForm.valid) {
      this.store.dispatch(editProduct());
      this.editProductForm.reset();
    }
  }

  productImageDropped($event: { file: File | null; fileSupported: boolean }) {
    if ($event.file != null && $event.fileSupported) {
      this.fileNotSupported = false;
      this.productImageName = $event.file.name;
      this.editProductForm.patchValue({ productImage: $event });
    } else {
      this.fileNotSupported = true;
    }
  }

  imageOverInput($event: boolean) {
    this.isImageOverInput = $event;
  }

  closeEditProductModal() {
    this.store.dispatch(closeEditProductModal());
  }
}
