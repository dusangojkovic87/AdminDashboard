import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { closeEditStaffModal } from '../staffActions/staffActions';
import { StaffMember } from '../types/StaffMember';

@Component({
  selector: 'app-edit-staff-modal',
  templateUrl: './edit-staff-modal.component.html',
  styleUrls: ['./edit-staff-modal.component.scss'],
})
export class EditStaffModalComponent implements OnInit, OnDestroy {
  editStaffForm!: FormGroup;
  memberStoreSub?: Subscription;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.editStaffForm = this.fb.group({
      image: null,
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      contact: ['', Validators.required],
      date: ['', Validators.required],
      role: ['', Validators.required],
    });

    this.getInitMemberData();
  }

  uploadedImage($event: File) {
    this.editStaffForm.patchValue({ image: $event.name });
  }

  closeEditStaffModal() {
    this.store.dispatch(closeEditStaffModal());
  }

  getInitMemberData() {
    this.memberStoreSub = this.store
      .select((state) => state.staffState.staffMemberToEdit)
      .subscribe((member: StaffMember | null) => {
        if (member) {
          this.editStaffForm.patchValue({ image: member.image });
          this.editStaffForm.patchValue({ name: member.name });
          this.editStaffForm.patchValue({ email: member.email });
          this.editStaffForm.patchValue({ password: member.password });
          this.editStaffForm.patchValue({ contact: member.contact });
          this.editStaffForm.patchValue({ date: member.joiningDate });
          this.editStaffForm.patchValue({ role: member.role });
        }
      });
  }

  ngOnDestroy(): void {
    if (this.memberStoreSub) {
      this.memberStoreSub.unsubscribe();
    }
  }
}
