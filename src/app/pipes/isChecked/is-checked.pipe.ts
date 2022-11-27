import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isChecked',
})
export class IsCheckedPipe implements PipeTransform {
  transform(value?: boolean, ...args: boolean[]): string {
    if (value === true) {
      return 'checked';
    }
    return '';
  }
}
