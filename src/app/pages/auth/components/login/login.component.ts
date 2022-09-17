import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from '../../authActions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    this.loginFormGroup = this.initiliazeLoginForm();
  }

  ngOnInit(): void {}

  initiliazeLoginForm(): FormGroup {
    return this.fb.group({
      email: ['admin@gmail.com', Validators.required],
      password: ['1234', Validators.required],
    });
  }

  login() {
    this.store.dispatch(
      loginAction({ loginRequest: this.loginFormGroup.value })
    );
  }
}
