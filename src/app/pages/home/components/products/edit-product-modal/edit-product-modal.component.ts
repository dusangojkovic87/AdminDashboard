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

  public productImageName: string | null = null;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.isModalOpened();
    this.getEditProductFromStore();
  }

  ngOnInit(): void {
    this.isModalOpened();
    this.editProductForm = this.fb.group({
      productImage: [null],
      productName: ['', Validators.required],
      productDetails: ['', Validators.required],
      category: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  EditProduct() {
    if (this.editProductForm.valid) {
      this.store.dispatch(editProduct());
      this.editProductForm.reset();
    }
  }

  productImageDropped($event: File) {
    this.editProductForm.patchValue({ productImage: $event.name });
  }

  closeEditProductModal() {
    this.store.dispatch(closeEditProductModal());
  }

  isModalOpened() {
    this.store
      .select((state) => state.productsState.isEditProductModalOpen)
      .subscribe((data) => {
        this.isEditProductModalOpen = data;
      });
  }

  getEditProductFromStore() {
    this.store
      .select((state) => state.productsState.productToEdit)
      .subscribe((data: Product | null) => {
        if (data) {
          this.setEditFormProductValues(data);
        }
      });
  }

  setEditFormProductValues(product: Product) {
    this.editProductForm.patchValue({ productImage: product.image });
    this.editProductForm.patchValue({ productName: product.productName });
    this.editProductForm.patchValue({ productDetails: product.details });
    this.editProductForm.patchValue({ category: product.category });
    this.editProductForm.patchValue({ unit: product.unit });
    this.editProductForm.patchValue({ quantity: product.quantity });
    this.editProductForm.patchValue({ price: product.price });
  }
}
