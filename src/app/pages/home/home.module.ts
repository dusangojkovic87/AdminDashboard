import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SaleStatisticsComponent } from './components/overview/sale-statistics/sale-statistics.component';
import { NgChartsModule } from 'ng2-charts';
import { RecentOrdersListComponent } from './components/overview/recent-orders-list/recent-orders-list.component';
import { TableModule } from 'ngx-easy-table';
import { RecentOrdersEffect } from './components/overview/overviewEffects/recentOrdersEffects';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { AddProductFormComponent } from './components/products/add-product-form/add-product-form.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductListItemComponent } from './components/products/product-list/product-list-item/product-list-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { ProductsService } from './components/products/services/products.service';
import { ProductsEffect } from './components/products/productEffects/productsEffect';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { AddProductModalComponent } from './components/products/add-product-modal/add-product-modal.component';
import { DirectivesModule } from 'src/app/directives/directivesModule/directives.module';
import { EditProductModalComponent } from './components/products/edit-product-modal/edit-product-modal.component';
import { AddCategoryFormComponent } from './components/category/add-category-form/add-category-form.component';
import { AddCategoryModalComponent } from './components/category/add-category-modal/add-category-modal.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryItemComponent } from './components/category/category-list/category-item/category-item.component';
import { CategoryEffect } from './components/category/categoryEffects/categoryEffect';
import { DeleteCategoryModalComponent } from './components/category/delete-category-modal/delete-category-modal.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { SearchCustomersComponent } from './components/customers/search-customers/search-customers.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomerComponent } from './components/customers/customers-list/customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent /*canActivate: [AuthGuard] */,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
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
    SaleStatisticsComponent,
    RecentOrdersListComponent,
    ProductFilterComponent,
    AddProductFormComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
    AddProductModalComponent,
    EditProductModalComponent,
    AddCategoryFormComponent,
    AddCategoryModalComponent,
    CategoryListComponent,
    CategoryItemComponent,
    DeleteCategoryModalComponent,
    EditCategoryComponent,
    SearchCustomersComponent,
    CustomersListComponent,
    CustomerComponent,
  ],
  imports: [
    TableModule,
    NgChartsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    CustomPipesModule,
    FormsModule,
    ReactiveFormsModule,
    /*  StoreModule.forFeature('home', reducers), */
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    DirectivesModule,
    EffectsModule.forFeature([
      AmountDetailsEffect,
      OrdersCountEffect,
      RecentOrdersEffect,
      ProductsEffect,
      CategoryEffect,
    ]),
  ],
  providers: [ProductsService],
})
export class HomeModule {}
