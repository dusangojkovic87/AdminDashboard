import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isProductPublished',
})
export class IsProductPublishedPipe implements PipeTransform {
  transform(value: boolean | undefined | null, ...args: unknown[]): unknown {
    if (value === true) {
      return 'This product is showing';
    }

    return 'This product is hidden';
  }
}
