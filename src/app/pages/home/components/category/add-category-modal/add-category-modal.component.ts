import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss'],
})
export class AddCategoryModalComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public isImageOverInput: boolean = false;
  addCategoryForm!: FormGroup;
  fileNotSupported = false;
  categoryImageName: string | null = null;

  ngOnInit(): void {
    this.addCategoryForm = this.fb.group({
      categoryImage: [null],
      productType: ['', Validators.required],
      productCategory: ['', Validators.required],
    });
  }

  categoryImageDropped($event: { file: File | null; fileSupported: boolean }) {
    console.log($event);

    if ($event.file != null && $event.fileSupported) {
      this.fileNotSupported = false;
      this.categoryImageName = $event.file.name;
      this.addCategoryForm.patchValue({ categoryImage: $event });
    } else {
      this.fileNotSupported = true;
    }
  }

  imageOverInput($event: boolean) {
    this.isImageOverInput = $event;
  }

  AddCategory() {
    if (this.addCategoryForm.valid) {
      console.log(this.addCategoryForm.value);

      this.addCategoryForm.reset();
      this.isImageOverInput = false;
    }
  }

  closeCategoryModal() {}
}
