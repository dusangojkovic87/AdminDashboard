import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-user-image',
  templateUrl: './upload-user-image.component.html',
  styleUrls: ['./upload-user-image.component.scss'],
})
export class UploadUserImageComponent implements OnInit {
  public isFileOverInput: boolean = false;
  public fileNotSupported: boolean = false;
  public imageName: string = '';

  @Output('imageEvent') imageFileEvent = new EventEmitter<File>(undefined);

  constructor() {}

  ngOnInit(): void {}

  imageDroped($event: any) {
    if ($event.fileSupported) {
      this.fileNotSupported = false;
    } else {
      this.fileNotSupported = true;
    }
  }

  onFileOver($event: any) {
    this.isFileOverInput = true;
  }

  onFileLeave($event: DragEvent) {
    this.isFileOverInput = false;
  }

  imageSelected($event: any) {
    if ($event) {
      if (
        $event.target.files[0].type === 'image/jpeg' ||
        $event.target.files[0].type === 'image/png'
      ) {
        this.imageName = $event.target.files[0].name;
        this.imageFileEvent.emit($event.target.files[0]);
        this.fileNotSupported = false;
      } else {
        this.imageName = '';
        this.fileNotSupported = true;
      }
    }
  }
}
