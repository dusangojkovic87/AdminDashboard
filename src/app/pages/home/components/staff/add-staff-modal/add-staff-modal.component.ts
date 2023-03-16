import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { closeStaffModal } from '../staffActions/staffActions';

@Component({
  selector: 'app-add-staff-modal',
  templateUrl: './add-staff-modal.component.html',
  styleUrls: ['./add-staff-modal.component.scss'],
})
export class AddStaffModalComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  uploadedImage(event: any) {
    console.log('slika', event);
  }

  closeStaffModal() {
    this.store.dispatch(closeStaffModal());
  }
}
