import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropUploadImageDirective } from '../dropUploadImage/drop-upload-image.directive';
import { StatusStyleDirective } from '../statusStyle/status-style.directive';

@NgModule({
  declarations: [DropUploadImageDirective, StatusStyleDirective],
  imports: [CommonModule],
  exports: [DropUploadImageDirective, StatusStyleDirective],
})
export class DirectivesModule {}
