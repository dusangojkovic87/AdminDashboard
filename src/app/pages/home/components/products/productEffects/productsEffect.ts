import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  addProductFail,
  addProductModal,
  addProductSuccess,
  editProductFail,
  editProductSuccess,
  getProducts,
  getProductsFail,
  getProductsSuccess,
  togglePublishProduct,
  tooglePublishProductFail,
  tooglePublishProductSuccess,
  uploadCsv,
  uploadCsvFail,
  uploadCsvSuccess,
} from '../productActions/productActions';
import { productActionTypes } from '../productActionTypes/productActionTypes';
import { ProductsService } from '../services/products.service';
import { addProduct } from '../types/addProduct';
import { Product } from '../types/Product';

@Injectable()
export class ProductsEffect {
  constructor(
    private actions: Actions,
    private productService: ProductsService
  ) {}

  $getProducts = createEffect(() =>
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

  $addProduct = createEffect(() =>
    this.actions.pipe(
      ofType(productActionTypes.ADD_PRODUCT),
      switchMap((product: addProduct) => {
        return this.productService.addProduct(product);
      }),
      map((product: addProduct) => {
        return addProductSuccess({ product: product });
      }),
      catchError((err) => {
        return of(addProductFail({ error: err }));
      })
    )
  );

  $editProduct = createEffect(() =>
    this.actions.pipe(
      ofType(productActionTypes.EDIT_PRODUCT),
      switchMap((product: addProduct) => {
        return this.productService.editProduct(product);
      }),
      map((product: addProduct) => {
        return editProductSuccess({ product: product });
      }),
      catchError((err) => {
        return of(editProductFail({ error: err }));
      })
    )
  );

  $togglePublishedProductStatus = createEffect(() =>
    this.actions.pipe(
      ofType(togglePublishProduct),
      switchMap(({ productId, isPublished }) => {
        return this.productService.togglePublishProductStatus(
          productId,
          isPublished
        );
      }),
      map(() => {
        return tooglePublishProductSuccess({
          isProductPublishingChanged: true,
        });
      }),
      catchError((error) => {
        return of(tooglePublishProductFail({ errors: error }));
      })
    )
  );

  $uploadCsv = createEffect(() =>
    this.actions.pipe(
      ofType(uploadCsv),
      switchMap(({ file }) => {
        return this.productService.uploadCsvFile(file);
      }),
      map(() => {
        return uploadCsvSuccess();
      }),
      catchError((error) => {
        return of(uploadCsvFail({ error: error }));
      })
    )
  );
}
