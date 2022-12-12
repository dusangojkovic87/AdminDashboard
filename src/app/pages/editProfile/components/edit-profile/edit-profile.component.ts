import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, AfterViewInit {
  updateUserForm!: FormGroup;
  public isFileOverInput: boolean = false;
  public fileNotSupported: boolean = false;
  public imageName: string | undefined | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.updateUserForm = this.fb.group({
      image: null,
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngAfterViewInit() {}

  updateUser() {
    console.log(this.updateUserForm.value);
  }

  imageDroped($event: { file: File | null; fileSupported: boolean }) {
    if ($event.fileSupported) {
      this.imageName = $event.file?.name;
      this.updateUserForm.patchValue({ image: $event.file });
    } else {
      this.fileNotSupported = true;
    }
  }

  onFileOver($event: boolean) {
    this.isFileOverInput = $event;
  }
}
