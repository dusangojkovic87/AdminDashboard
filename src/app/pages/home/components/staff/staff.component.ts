import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { getStaff } from './staffActions/staffActions';
import { StaffMember } from './types/StaffMember';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  staff: StaffMember[] = [];
  p: number = 1;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getStaffAction();
  }

  getStaffAction() {
    this.store.dispatch(getStaff());
    this.getStaffFromStore();
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
}
