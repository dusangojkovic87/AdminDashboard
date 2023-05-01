import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { addStaffMember, closeStaffModal } from '../staffActions/staffActions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-staff-modal',
  templateUrl: './add-staff-modal.component.html',
  styleUrls: ['./add-staff-modal.component.scss'],
})
export class AddStaffModalComponent implements OnInit {
  addStaffForm!: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addStaffForm = this.fb.group({
      image: null,
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      contact: ['', Validators.required],
      date: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  uploadedImage($event: File) {
    this.addStaffForm.patchValue({ image: $event.name });
  }

  closeStaffModal() {
    this.store.dispatch(closeStaffModal());
  }

  addStaffMember() {
    this.store.dispatch(addStaffMember({ member: this.addStaffForm.value }));
    this.addStaffForm.reset();
  }
}
