import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { EditProfileComponent } from '../pages/editProfile/components/edit-profile/edit-profile.component';

import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { MessageTooltipComponent } from './components/message-tooltip/message-tooltip.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UploadUserImageComponent } from './components/upload-user-image/upload-user-image.component';
const routes: Routes = [
  { path: 'edit-profile', component: EditProfileComponent },
];

@NgModule({
  declarations: [
    DashboardNavComponent,
    MessageTooltipComponent,
    LoadingSpinnerComponent,
    UploadUserImageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([]),
  ],
  providers: [],
  exports: [
    DashboardNavComponent,
    MessageTooltipComponent,
    LoadingSpinnerComponent,
    UploadUserImageComponent,
  ],
})
export class SharedModule {}
