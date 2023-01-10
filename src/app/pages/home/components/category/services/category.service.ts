import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryData } from '../types/CategoryData';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryData[]> {
    let baseUrl = environment.baseUrl;

    return this.http.get<CategoryData[]>(
      baseUrl + '/assets/fakeBackend/categories/categories.json'
    );
  }

  deleteCategoryById(id: number): Observable<number> {
    //fake delete to server
    console.log(`category with ${id} deleted! `);
    return of(id);
  }
}
