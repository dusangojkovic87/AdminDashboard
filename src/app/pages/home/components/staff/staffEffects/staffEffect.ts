import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StaffService } from '../services/staff.service';
import {
  deleteStaffFail,
  deleteStaffSuccess,
  editStaffMember,
  editStaffMemberFail,
  editStaffMemberSuccess,
  getStaffFail,
  getStaffSuccess,
} from '../staffActions/staffActions';
import { staffActionTypes } from '../staffActionTypes/staffActionTypes';
import { StaffMember } from '../types/StaffMember';

@Injectable()
export class StaffEffect {
  constructor(private $actions: Actions, private staffService: StaffService) {}

  $getStaff = createEffect(() =>
    this.$actions.pipe(
      ofType(staffActionTypes.GET_STAFF),
      switchMap(() => {
        return this.staffService.getStaff();
      }),
      map((staff: StaffMember[]) => {
        return getStaffSuccess({ staff: staff });
      }),
      catchError((error) => {
        return of(getStaffFail({ errors: error }));
      })
    )
  );

  $deleteStaff = createEffect(() =>
    this.$actions.pipe(
      ofType(staffActionTypes.DELETE_STAFF_RECORD),
      switchMap((id) => {
        return this.staffService.deleteStaff(id);
      }),
      map((id) => {
        return deleteStaffSuccess();
      }),
      catchError((error) => {
        return of(deleteStaffFail({ error: error }));
      })
    )
  );

  $editMember = createEffect(() =>
    this.$actions.pipe(
      ofType(editStaffMember),
      switchMap(({ member }) => {
        return this.staffService.editStaffMember(member);
      }),
      map(() => {
        return editStaffMemberSuccess();
      }),
      catchError((error) => {
        console.log(error);
        return of(editStaffMemberFail({ error: error }));
      })
    )
  );
}
