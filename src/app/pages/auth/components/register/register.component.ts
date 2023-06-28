import { NotifierService } from 'angular-notifier';
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
  policyAccepted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private notifier: NotifierService
  ) {
    this.registerForm = this.initilazeRegisterForm();
  }

  ngOnInit(): void {}

  policyAcception(event: any) {
    this.policyAccepted = event;
  }

  initilazeRegisterForm(): FormGroup {
    return this.fb.group({
      name: ['johndoe', Validators.required],
      email: ['admin@gmail.com', Validators.required],
      password: ['1234', Validators.required],
      role: ['admin', Validators.required],
    });
  }

  submitRegisterForm() {
    if (this.policyAccepted === false) {
      this.notifier.notify('warning', 'must accepted policy');
    } else {
      this.store.dispatch(registerAction({ user: this.registerForm.value }));
    }
  }
}
