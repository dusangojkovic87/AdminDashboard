import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropUploadImage]',
})
export class DropUploadImageDirective {
  @Output() onImageDropped = new EventEmitter<{
    file: File | null;
    fileSupported: boolean;
  }>();

  @Output() onFileOverEvent = new EventEmitter<boolean>(false);

  @HostListener('dragover', ['$event']) dragOverHandler($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.onFileOverEvent.emit(true);
  }

  @HostListener('dragleave', ['$event']) dragLeaveHandler($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.onFileOverEvent.emit(false);
  }

  @HostListener('drop', ['$event']) dropLeaveHandler($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();

    const fileList = $event.dataTransfer?.files;
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        this.onImageDropped.emit({ file: file, fileSupported: true });
      } else {
        this.onImageDropped.emit({ file: null, fileSupported: false });
      }
    }
  }

  constructor() {}
}
