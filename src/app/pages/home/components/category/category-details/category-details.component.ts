import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { getCategoryById } from '../categoryActions/categoryActions';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const categoryId = Number(params['id']);
      if (categoryId) {
        this.store.dispatch(getCategoryById({ id: categoryId }));
      }
    });

    this.getCategoryByIdFromStore();
  }

  getCategoryByIdFromStore() {
    this.store
      .select((state) => state.categoryState.categoryById)
      .subscribe((data) => {
        if (data) {
          console.log(data);
        }
      });
  }
}
