import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customer.service';

import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';

import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceService } from './invoice.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule, MdCoreModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
     MdCoreModule,
     MdListModule,
     MdInputModule,
     MdToolbarModule,
     MdSidenavModule,
     MdButtonModule,
     MdChipsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerInfoComponent,
    ProductsComponent,
    ProductInfoComponent,
    InvoiceComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CustomerService, ProductService, InvoiceService],
})
export class AppModule { }
