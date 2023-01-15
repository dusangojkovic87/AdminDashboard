import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { TooltipComponent } from 'src/app/Shared/components/tooltip/tooltip.component';

@Directive({
  selector: '[appTooltipBaloon]',
})
export class TooltipBaloonDirective {
  @Input() tooltipText: string = '';
  private componentRef: any;

  constructor(private container: ViewContainerRef) {}
  ngOnInit() {
    this.componentRef = this.container.createComponent(TooltipComponent);
    this.componentRef.instance.tooltipText = this.tooltipText;
  }
}
