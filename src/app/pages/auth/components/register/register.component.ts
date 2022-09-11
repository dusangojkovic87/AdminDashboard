import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../../authActions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.registerForm = this.initilazeRegisterForm();
  }

  ngOnInit(): void {}

  initilazeRegisterForm(): FormGroup {
    return this.fb.group({
      name: ['johndoe', Validators.required],
      email: ['admin@gmail.com', Validators.required],
      password: ['1234', Validators.required],
      role: ['admin', Validators.required],
    });
  }

  submitRegisterForm() {
    this.store.dispatch(registerAction({ user: this.registerForm.value }));
  }
}
