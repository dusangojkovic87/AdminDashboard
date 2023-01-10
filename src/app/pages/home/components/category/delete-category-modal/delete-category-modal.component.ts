import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeDeleteCategoryModal,
  deleteCategory,
} from '../categoryActions/categoryActions';

@Component({
  selector: 'app-delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  styleUrls: ['./delete-category-modal.component.scss'],
})
export class DeleteCategoryModalComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  closeDeleteCategoryModal($event: Event) {
    let element = $event.target as HTMLElement;
    if (
      element.classList.contains('delete-category-modal-overlay') ||
      element.classList.contains('close-category-btn')
    ) {
      this.store.dispatch(closeDeleteCategoryModal());
    }

    return;
  }

  deleteCategory() {
    this.store
      .select((state) => state.categoryState.categoryToDelete)
      .subscribe((id) => {
        if (id != null || id != undefined) {
          this.store.dispatch(deleteCategory({ id: id }));
          this.store.dispatch(closeDeleteCategoryModal());
        }
      });
  }
}
