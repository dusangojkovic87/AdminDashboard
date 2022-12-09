import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inStock',
})
export class InStockPipe implements PipeTransform {
  transform(value: boolean | undefined | null, ...args: unknown[]): unknown {
    if (value === true) {
      return 'in Stock';
    }

    return 'not in Stock';
  }
}
