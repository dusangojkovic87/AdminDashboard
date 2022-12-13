import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { User } from 'src/app/interfaces/User';
import { updateUserProfile } from '../../editProfileActions/editProfileActions';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  updateUserForm!: FormGroup;
  public isFileOverInput: boolean = false;
  public fileNotSupported: boolean = false;
  public imageName: string | undefined | null = null;
  public currentUser: User | undefined;
  $userSub?: Subscription;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.$userSub = this.store
      .select((state) => state.authState.currentUser)
      .subscribe((user) => {
        if (user) {
          this.currentUser = user;
        }
      });

    this.updateUserForm = this.fb.group({
      image: this.currentUser?.image,
      name: [this.currentUser?.name, Validators.required],
      email: [this.currentUser?.email, [Validators.required, Validators.email]],
      contact: [this.currentUser?.contact, Validators.required],
      role: [this.currentUser?.role, Validators.required],
    });
  }

  updateUser() {
    this.store.dispatch(updateUserProfile({ user: this.updateUserForm.value }));
  }

  imageDroped($event: any) {
    if ($event.fileSupported) {
      this.imageName = $event.file?.name;
      this.updateUserForm.patchValue({ image: $event.file });
    } else {
      this.fileNotSupported = true;
    }
  }

  onFileOver($event: any) {
    this.isFileOverInput = $event;
  }

  ngOnDestroy() {
    this.$userSub?.unsubscribe();
  }
}
