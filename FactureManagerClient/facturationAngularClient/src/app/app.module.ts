import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import "materialize-css";
import { MaterializeModule } from "angular2-materialize";


import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customer.service';

import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';

import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceSelectorComponent } from './invoice-selector/invoice-selector.component';
import { InvoiceService } from './invoice.service';

import {BarcodesComponent} from './Barcodes/barcodes.component';

import { LineService } from './line.service';
import { QRCodeModule } from 'angular2-qrcode';
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
    BrowserAnimationsModule,
    MaterializeModule,
    QRCodeModule,
  ],
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerInfoComponent,
    ProductsComponent,
    ProductInfoComponent,
    InvoiceComponent,
    InvoiceSelectorComponent,
    BarcodesComponent
  ],
  bootstrap: [AppComponent],
  providers: [CustomerService, ProductService, InvoiceService, LineService],
})
export class AppModule { }
