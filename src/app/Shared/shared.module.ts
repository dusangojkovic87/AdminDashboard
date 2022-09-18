import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [DashboardNavComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([]),
  ],
  providers: [],
  exports: [DashboardNavComponent],
})
export class SharedModule {}
