import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {QRCodeModule} from 'angular2-qrcode';

@Component({
  selector: 'app-barcodes',
  templateUrl: './barcodes.component.html',
  styleUrls: ['./barcodes.component.css']
})
export class BarcodesComponent implements OnInit {

  customers: Customer[];
  products: Product[];
  selectedCustomer: Customer;

  constructor(private router: Router, private customerService: CustomerService, private productService: ProductService) {

  }

  ngOnInit() {
    this.customerService.getCustomers().then(
      (customers) => {
        this.customers = customers;
        this.selectedCustomer = customers[0];
    })
    this.productService.getProducts().then(products => this.products = products);
  }

  onCustomerChange(event:string):void {
      this.selectedCustomer = JSON.parse(event);
  }

}
