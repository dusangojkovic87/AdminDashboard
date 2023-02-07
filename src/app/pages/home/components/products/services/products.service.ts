import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addProduct } from '../types/addProduct';
import { Product } from '../types/Product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.baseUrl + '/assets/fakeBackend/products/getProducts.json'
    );
  }

  addProduct(product: addProduct): Observable<addProduct> {
    //fake post to server
    return of(product);
  }

  editProduct(product: addProduct): Observable<addProduct> {
    //fake edit product
    return of(product);
  }

  togglePublishProductStatus(productId: number, isPublished: boolean) {
    //fake post to server
    return of(true);
  }
}
