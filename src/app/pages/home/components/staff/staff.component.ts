import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeDeleteStaffModal,
  deleteStaff,
  getStaff,
} from './staffActions/staffActions';
import { StaffMember } from './types/StaffMember';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  staff: StaffMember[] = [];
  isModalOpen: boolean = false;
  isDeleteStaffModalOpen: boolean = false;
  isEditStaffModalOpened: boolean = false;
  p: number = 1;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getStaffAction();
    this.isAddStaffModalOpen();
    this.isDeleteModalOpen();
    this.isEditStaffModalOpen();
  }

  closeDeleteStaffModal() {
    this.store.dispatch(closeDeleteStaffModal());
  }

  getStaffAction() {
    this.store.dispatch(getStaff());
    this.getStaffFromStore();
  }

  isAddStaffModalOpen() {
    this.store
      .select((state) => state.staffState.isAddStaffModalOpen)
      .subscribe((data) => {
        this.isModalOpen = data;
      });
  }

  getStaffFromStore() {
    this.store
      .select((state) => state.staffState.filteredStaff)
      .subscribe((data) => {
        if (data) {
          this.staff = data;
        }
      });
  }

  isDeleteModalOpen() {
    this.store
      .select((state) => state.staffState.isDeleteStaffModalOpen)
      .subscribe((data) => {
        this.isDeleteStaffModalOpen = data;
      });
  }

  deleteStaff() {
    this.store
      .select((state) => state.staffState.staffIdToDelete)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(deleteStaff({ id: id }));
        }
      });
  }

  isEditStaffModalOpen() {
    this.store
      .select((state) => state.staffState.isEditStaffModalOpen)
      .subscribe((data) => {
        this.isEditStaffModalOpened = data;
      });
  }
}
