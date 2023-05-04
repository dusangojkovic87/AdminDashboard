import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { uploadCsv } from '../productActions/productActions';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent implements OnInit {
  fileToUpload?: File;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  csvFileAdded($event: any) {
    this.fileToUpload = $event.target.files[0] as File;
  }

  uploadCsv() {
    if (
      this.fileToUpload?.type === 'text/csv' ||
      this.fileToUpload?.type === 'application/csv'
    ) {
      const formData = new FormData();
      formData.append('csv', this.fileToUpload);
      this.store.dispatch(uploadCsv({ file: formData }));
      return;
    }

    alert('file must be in csv format');
  }
}
