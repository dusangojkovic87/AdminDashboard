import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('preview') preview?: ElementRef;

  imagePreview: string = '';
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

  imageAdded($event: File) {
    //TODO add upload image to disk
    this.updateUserForm.patchValue({ image: $event });
    //preview image

    this.imagePreview = URL.createObjectURL($event);
    let image = this.preview?.nativeElement as HTMLImageElement;
    image.src = this.imagePreview;
  }

  get email() {
    return this.updateUserForm.get('email');
  }

  get name() {
    return this.updateUserForm.get('name');
  }

  get contact() {
    return this.updateUserForm.get('contact');
  }

  ngOnDestroy() {
    this.$userSub?.unsubscribe();
  }
}
