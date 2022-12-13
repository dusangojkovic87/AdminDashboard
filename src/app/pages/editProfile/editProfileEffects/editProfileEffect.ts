import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  updateUserProfileFail,
  updateUserProfileSuccess,
} from '../editProfileActions/editProfileActions';
import { editProfileActionTypes } from '../editProfileActionTypes/editProfileActionTypes';

import { EditProfileService } from '../services/edit-profile.service';

@Injectable()
export class EditProfileEffect {
  constructor(
    private $actions: Actions,
    private editProfileService: EditProfileService
  ) {}

  $getUser = createEffect(() =>
    this.$actions.pipe(
      ofType(editProfileActionTypes.UPDATE_USER_PROFILE),
      switchMap((user) => {
        return this.editProfileService.updateUser(user);
      }),
      map((user) => {
        return updateUserProfileSuccess({ user: user });
      }),
      catchError((error) => {
        return of(updateUserProfileFail({ error: error }));
      })
    )
  );
}
