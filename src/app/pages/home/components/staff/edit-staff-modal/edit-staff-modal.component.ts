import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { closeEditStaffModal } from '../staffActions/staffActions';

@Component({
  selector: 'app-edit-staff-modal',
  templateUrl: './edit-staff-modal.component.html',
  styleUrls: ['./edit-staff-modal.component.scss'],
})
export class EditStaffModalComponent implements OnInit {
  editStaffForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.editStaffForm = this.fb.group({
      image: null,
      email: ['', Validators.required],
      password: ['', Validators.required],
      contact: ['', Validators.required],
      date: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  uploadedImage($event: File) {
    this.editStaffForm.patchValue({ image: $event.name });
  }

  closeEditStaffModal() {
    this.store.dispatch(closeEditStaffModal());
  }
}
