import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { EditProfileComponent } from '../pages/editProfile/components/edit-profile/edit-profile.component';

import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
const routes: Routes = [
  { path: 'edit-profile', component: EditProfileComponent },
];

@NgModule({
  declarations: [DashboardNavComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([]),
  ],
  providers: [],
  exports: [DashboardNavComponent],
})
export class SharedModule {}
