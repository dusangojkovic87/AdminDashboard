import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { sharedReducers } from './sharedReducer/sharedReducer';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('shared', sharedReducers),
    EffectsModule.forFeature([]),
  ],
  providers: [],
})
export class SharedModule {}
