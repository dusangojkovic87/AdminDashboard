import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeEditProductModal,
  openEditProductModal,
} from '../productActions/productActions';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss'],
})
export class EditProductModalComponent implements OnInit {
  editProductForm!: FormGroup;
  public isEditProductModalOpen: boolean = false;

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
      //edit product action here
      console.log(this.editProductForm.value);

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
