import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './authEffects/auth.effects';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes = [
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ForgotPasswordComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [],
})
export class AuthModule {}
