import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropUploadImageDirective } from '../dropUploadImage/drop-upload-image.directive';
import { TooltipBaloonDirective } from '../tooltipBaloon/tooltip-baloon.directive';

@NgModule({
  declarations: [DropUploadImageDirective, TooltipBaloonDirective],
  imports: [CommonModule],
  exports: [DropUploadImageDirective, TooltipBaloonDirective],
})
export class DirectivesModule {}
