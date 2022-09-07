import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log(this.registerForm.value);
  }
}
