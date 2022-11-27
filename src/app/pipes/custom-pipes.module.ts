import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsCheckedPipe } from './isChecked/is-checked.pipe';

@NgModule({
  declarations: [IsCheckedPipe],
  imports: [CommonModule],
  exports: [IsCheckedPipe],
})
export class CustomPipesModule {}
