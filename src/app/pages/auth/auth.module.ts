import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './authReducer/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './authEffects/auth.effects';

const routes = [
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducers),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [],
})
export class AuthModule {}
