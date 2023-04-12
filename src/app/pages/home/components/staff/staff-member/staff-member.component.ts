import { Component, Input, OnInit } from '@angular/core';
import { StaffMember } from '../types/StaffMember';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { openDeleteStaffModal } from '../staffActions/staffActions';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.scss'],
})
export class StaffMemberComponent implements OnInit {
  @Input('staffMember') staffMember?: StaffMember;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  openDeleteStaffModal(id: number) {
    if (id) {
      this.store.dispatch(openDeleteStaffModal({ id: id }));
    }
  }
}
