import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  addCategory,
  closeAddCategoryModal,
} from '../categoryActions/categoryActions';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss'],
})
export class AddCategoryModalComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}
  public isImageOverInput: boolean = false;
  addCategoryForm!: FormGroup;
  isModalOpen: boolean = false;
  @ViewChild('preview') preview?: ElementRef;
  previewImage: string = '/assets/images/default.jpg';

  ngOnInit(): void {
    this.store
      .select((state) => state.categoryState.isModalOpen)
      .subscribe((data: boolean) => {
        this.isModalOpen = data;
      });

    this.addCategoryForm = this.fb.group({
      image: [null],
      productType: ['', Validators.required],
      parentCategory: ['', Validators.required],
    });
  }

  imageDropped($event: File) {
    this.addCategoryForm.patchValue({ categoryImage: $event.name });
    this.previewImage = URL.createObjectURL($event);
    let image = this.preview?.nativeElement as HTMLImageElement;
    image.src = this.previewImage;
  }

  AddCategory() {
    if (this.addCategoryForm.valid) {
      this.store.dispatch(
        addCategory({ category: this.addCategoryForm.value })
      );
      this.addCategoryForm.reset();
    }
  }

  closeCategoryModal() {
    this.store.dispatch(closeAddCategoryModal());
  }
}
