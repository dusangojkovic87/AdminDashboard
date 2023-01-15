import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropUploadImageDirective } from '../dropUploadImage/drop-upload-image.directive';

@NgModule({
  declarations: [DropUploadImageDirective],
  imports: [CommonModule],
  exports: [DropUploadImageDirective],
})
export class DirectivesModule {}
