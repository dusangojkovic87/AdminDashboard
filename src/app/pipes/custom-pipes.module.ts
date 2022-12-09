import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsCheckedPipe } from './isChecked/is-checked.pipe';
import { InStockPipe } from './inStock/in-stock.pipe';
import { IsProductPublishedPipe } from './isProductPublished/is-product-published.pipe';

@NgModule({
  declarations: [IsCheckedPipe, InStockPipe, IsProductPublishedPipe],
  imports: [CommonModule],
  exports: [IsCheckedPipe, InStockPipe, IsProductPublishedPipe],
})
export class CustomPipesModule {}
