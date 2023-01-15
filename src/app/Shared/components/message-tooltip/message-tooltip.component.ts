import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-message-tooltip',
  templateUrl: './message-tooltip.component.html',
  styleUrls: ['./message-tooltip.component.scss'],
})
export class MessageTooltipComponent implements OnInit, AfterViewInit {
  @Input('tooltipColor') tooltipColor: string = '#0fa66e';
  @Input('tooltipText') tooltipText: string = '';
  @ViewChild('tooltipContent') tooltipContent?: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.tooltipContent) {
      this.renderer.setStyle(
        this.tooltipContent?.nativeElement,
        'backgroundColor',
        this.tooltipColor
      );
    }
  }
}
