import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusStyle]',
})
export class StatusStyleDirective {
  @Input('text') text: string = '';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    if (
      this.text.toLocaleLowerCase() === 'pending' ||
      this.text.toLocaleLowerCase() === 'processing'
    ) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'orange--bg--status'
      );
    } else if (
      this.text.toLocaleLowerCase() === 'delivered' ||
      this.text.toLocaleLowerCase() === 'selling'
    ) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'green--bg--status'
      );
    } else if (
      this.text.toLocaleLowerCase() === 'cancel' ||
      this.text.toLocaleLowerCase() === 'sold out'
    ) {
      this.renderer.addClass(this.elementRef.nativeElement, 'red--bg--status');
    }
  }
}
