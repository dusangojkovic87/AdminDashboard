import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { openAddCategoryModal } from '../categoryActions/categoryActions';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss'],
})
export class AddCategoryFormComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  openCategoryModal() {
    this.store.dispatch(openAddCategoryModal());
  }
}
