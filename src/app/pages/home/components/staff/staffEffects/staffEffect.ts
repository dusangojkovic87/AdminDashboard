import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StaffService } from '../services/staff.service';
import { getStaffFail, getStaffSuccess } from '../staffActions/staffActions';
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
}
