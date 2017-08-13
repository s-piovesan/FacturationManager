import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { CustomersComponent } from '../customers/customers.component';

import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductsComponent } from '../products/products.component';

import {InvoiceComponent} from '../invoice/invoice.component';

const routes: Routes = [
  { path: 'customerinformation/:id', component: CustomerInfoComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'productinformation/:id', component: ProductInfoComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'invoice', component: InvoiceComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
