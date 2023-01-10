import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
export class DeleteCategoryModalComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}
  sub!: Subscription;

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
    this.sub = this.store
      .select((state) => state.categoryState.categoryToDelete)
      .subscribe((id) => {
        if (id != null || id != undefined) {
          this.store.dispatch(deleteCategory({ id: id }));
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
