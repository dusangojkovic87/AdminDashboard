import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from 'src/app/Shared/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { StaffComponent } from './components/staff/staff.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagesComponent } from './components/pages/pages.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OrdersAmountOverviewComponent } from './components/overview/orders-amount-overview/orders-amount-overview.component';
import { AmountDetailsEffect } from './components/overview/overviewEffects/amountDetailsEffect';
import { OrdersCountInfoComponent } from './components/overview/orders-count-info/orders-count-info.component';
import { OrdersCountEffect } from './components/overview/overviewEffects/ordersCount';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent /*canActivate: [AuthGuard] */,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'coupons', component: CouponsComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'pages', component: PagesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    CategoryComponent,
    CustomersComponent,
    OrdersComponent,
    CouponsComponent,
    StaffComponent,
    SettingsComponent,
    PagesComponent,
    OverviewComponent,
    OrdersAmountOverviewComponent,
    OrdersCountInfoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    /*  StoreModule.forFeature('home', reducers), */
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([AmountDetailsEffect, OrdersCountEffect]),
  ],
  providers: [],
})
export class HomeModule {}
