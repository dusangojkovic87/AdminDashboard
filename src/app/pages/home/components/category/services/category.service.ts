import { bestSellingStatReducer } from './../../overview/overviewReducer/bestSellingStatReducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryData } from '../types/CategoryData';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryData[]> {
    const baseUrl = 'http://localhost:4200';

    return this.http.get<CategoryData[]>(
      baseUrl + '/assets/fakeBackend/categories/categories.json'
    );
  }

  deleteCategoryById(id: number): Observable<number> {
    //fake delete to server
    return of(id);
  }

  togglePublishCategory(categoryId: number, isPublished: boolean) {
    //fake post to server
    return of(categoryId);
  }

  addCategory(category: CategoryData) {
    //fake post to server
    return of(category);
  }

  getCategoryById(): Observable<CategoryData[]> {
    const baseUrl = 'http://localhost:4200';
    return this.http.get<CategoryData[]>(
      baseUrl + '/assets/fakeBackend/categories/categories.json'
    );
  }

  deleteProductFromCategoryById(id: number) {
    //fake delete to server
    return of(id);
  }
}
