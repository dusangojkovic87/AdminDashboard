import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  isDeleteModalOpen: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.categoryState.isDeleteModalOpen)
      .subscribe((data) => {
        this.isDeleteModalOpen = data;
      });
  }
}
