import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinct, switchMap } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  filterStaffByName,
  filterStaffByRole,
} from '../staffActions/staffActions';

@Component({
  selector: 'app-add-and-search-staff',
  templateUrl: './add-and-search-staff.component.html',
  styleUrls: ['./add-and-search-staff.component.scss'],
})
export class AddAndSearchStaffComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  roles: string[] = [];
  name: string = '';
  roleSelected: string = '';

  ngOnInit(): void {
    this.getRolesFromStore();
  }

  getRolesFromStore() {
    this.store
      .select((state) => state.staffState.staff)
      .pipe(
        switchMap((staff) => staff.map((s) => s.role)),
        distinct()
      )
      .subscribe((role) => {
        this.roles.push(role);
      });
  }

  filterStaffByName() {
    this.store.dispatch(filterStaffByName({ name: this.name }));
  }

  filterStaffByRole() {
    this.store.dispatch(filterStaffByRole({ role: this.roleSelected }));
  }
}
