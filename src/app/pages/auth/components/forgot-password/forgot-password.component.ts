import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  emailForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  recoverPassword() {
    //add pass recovery logic here
    this.emailForm.reset();
  }
}
