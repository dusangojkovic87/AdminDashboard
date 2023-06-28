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
import { CustomersEffect } from './components/customers/customersEffects/customersEffect';
import { CustomerOrderListComponent } from './components/customer-order-list/customer-order-list.component';
import { CustomerOrderEffect } from './components/customer-order-list/customerOrderEffects/customerOrderEffect';
import { CustomerOrderItemComponent } from './components/customer-order-list/customer-order-item/customer-order-item.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { OrdersFilterSearchComponent } from './components/orders/orders-filter-search/orders-filter-search.component';
import { OrderItemComponent } from './components/orders/order-item/order-item.component';
import { OrdersEffect } from './components/orders/ordersEffects/ordersEffect';
import { AddAndSearchCouponsComponent } from './components/coupons/add-and-search-coupons/add-and-search-coupons.component';
import { CouponsEffect } from './components/coupons/couponsEffects/couponsEffect';
import { CouponComponent } from './components/coupons/coupon/coupon.component';
import { AddAndSearchStaffComponent } from './components/staff/add-and-search-staff/add-and-search-staff.component';
import { StaffMemberComponent } from './components/staff/staff-member/staff-member.component';
import { StaffEffect } from './components/staff/staffEffects/staffEffect';
import { EditProfileModule } from '../editProfile/editProfile.module';
import { SaleOrdersStatEffect } from './components/overview/overviewEffects/saleOrdersStatEffect';
import { BestSellingStatEffect } from './components/overview/overviewEffects/bestSellinStatEffect';
import { OrderInvoicesComponent } from './components/orders/order-invoices/order-invoices.component';
import { InvoiceHeaderComponent } from './components/orders/order-invoices/invoice-header/invoice-header.component';
import { InvoiceNumberDateComponent } from './components/orders/order-invoices/invoice-number-date/invoice-number-date.component';
import { InvoiceProductListComponent } from './components/orders/order-invoices/invoice-product-list/invoice-product-list.component';
import { InvoiceProductItemComponent } from './components/orders/order-invoices/invoice-product-list/invoice-product-item/invoice-product-item.component';
import { InvoicePaymentInfoComponent } from './components/orders/order-invoices/invoice-payment-info/invoice-payment-info.component';
import { PrintDownloadInvoicesComponent } from './components/orders/order-invoices/print-download-invoices/print-download-invoices.component';
import { AddStaffModalComponent } from './components/staff/add-staff-modal/add-staff-modal.component';
import { AddCouponModalComponent } from './components/coupons/add-coupon-modal/add-coupon-modal.component';
import { EditCouponModalComponent } from './components/coupons/edit-coupon-modal/edit-coupon-modal.component';
import { EditStaffModalComponent } from './components/staff/edit-staff-modal/edit-staff-modal.component';
import { CategoryDetailsComponent } from './components/category/category-details/category-details.component';
import { CategoryProductFilterFormComponent } from './components/category/category-details/category-product-filter-form/category-product-filter-form.component';
import { CategoryProductComponent } from './components/category/category-details/category-product/category-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'categoryDetails/:id', component: CategoryDetailsComponent },
      { path: 'customers', component: CustomersComponent },
      {
        path: 'customers/customer-order-list/:id',
        component: CustomerOrderListComponent,
      },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/invoices/:id', component: OrderInvoicesComponent },
      { path: 'coupons', component: CouponsComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'settings', component: SettingsComponent },
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
    CustomerOrderListComponent,
    CustomerOrderItemComponent,
    OrdersFilterSearchComponent,
    OrderItemComponent,
    AddAndSearchCouponsComponent,
    CouponComponent,
    AddAndSearchStaffComponent,
    StaffMemberComponent,
    OrderInvoicesComponent,
    InvoiceHeaderComponent,
    InvoiceNumberDateComponent,
    InvoiceProductListComponent,
    InvoiceProductItemComponent,
    InvoicePaymentInfoComponent,
    PrintDownloadInvoicesComponent,
    AddStaffModalComponent,
    AddCouponModalComponent,
    EditCouponModalComponent,
    EditStaffModalComponent,
    CategoryDetailsComponent,
    CategoryProductFilterFormComponent,
    CategoryProductComponent,
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
    SharedModule,
    EditProfileModule,
    DirectivesModule,
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
      CustomersEffect,
      CustomerOrderEffect,
      OrdersEffect,
      CouponsEffect,
      StaffEffect,
      SaleOrdersStatEffect,
      BestSellingStatEffect,
    ]),
  ],
  providers: [ProductsService],
})
export class HomeModule {}
