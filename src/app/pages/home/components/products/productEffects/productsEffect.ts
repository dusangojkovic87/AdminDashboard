import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getProducts,
  getProductsFail,
  getProductsSuccess,
} from '../productActions/productActions';
import { ProductsService } from '../services/products.service';
import { Product } from '../types/Product';

@Injectable()
export class ProductsEffect {
  constructor(
    private actions: Actions,
    private productService: ProductsService
  ) {}

  $products = createEffect(() =>
    this.actions.pipe(
      ofType(getProducts),
      switchMap(() => {
        return this.productService.getProducts();
      }),
      map((data: Product[]) => {
        return getProductsSuccess({ data: data });
      }),
      catchError((err) => {
        return of(getProductsFail(err));
      })
    )
  );
}
