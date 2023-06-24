import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeAddCategoryModal,
  closeEditCategoryModal,
} from '../categoryActions/categoryActions';
import { CategoryData } from '../types/CategoryData';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  @ViewChild('productTypeSelect') productTypeSelectElementRef?: ElementRef;

  public isImageOverInput: boolean = false;
  editCategoryForm!: FormGroup;
  fileNotSupported = false;
  categoryImageName: string | null = null;
  storeSub!: Subscription;

  ngOnInit(): void {
    this.editCategoryForm = this.fb.group({
      categoryImage: [null],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.storeSub = this.store
      .select((state) => state.categoryState.categoryToEdit)
      .subscribe((data: CategoryData | null) => {
        if (data) {
          this.editCategoryForm.patchValue({ name: data.name });
          this.editCategoryForm.patchValue({ description: data.description });
        }
      });
  }

  categoryImageDropped($event: { file: File | null; fileSupported: boolean }) {
    if ($event.file != null && $event.fileSupported) {
      this.fileNotSupported = false;
      this.categoryImageName = $event.file.name;
      this.editCategoryForm.patchValue({ categoryImage: $event });
    } else {
      this.fileNotSupported = true;
    }
  }

  imageOverInput($event: boolean) {
    this.isImageOverInput = $event;
  }

  AddCategory() {
    if (this.editCategoryForm.valid) {
      console.log(this.editCategoryForm.value);

      this.editCategoryForm.reset();
      this.isImageOverInput = false;
    }
  }

  closeEditCategoryModal() {
    this.store.dispatch(closeEditCategoryModal());
  }

  ngOnDestroy() {
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
