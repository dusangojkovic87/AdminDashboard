import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditProfileEffect } from './editProfileEffects/editProfileEffect';

const routes = [{ path: 'edit-profile', component: EditProfileComponent }];

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([EditProfileEffect]),
  ],
  exports: [ReactiveFormsModule, FormsModule],
  providers: [],
})
export class EditProfileModule {}
