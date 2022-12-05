import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './pages/home/components/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HeaderComponent } from './Shared/components/header/header.component';
import { SharedModule } from './Shared/shared.module';
import { appReducer } from './appReducer/appReducer';
import { EditProfileComponent } from './pages/editProfile/components/edit-profile/edit-profile.component';
import { EditProfileModule } from './pages/editProfile/editProfile.module';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesModule } from './directives/directivesModule/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EditProfileComponent,
  ],
  imports: [
    DirectivesModule,
    NgChartsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    EditProfileModule,
    HomeModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
