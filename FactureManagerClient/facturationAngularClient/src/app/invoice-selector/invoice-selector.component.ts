import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Invoice } from '../invoice';
import {MaterializeDirective} from "angular2-materialize";
import * as Materialize from "angular2-materialize";
import {InvoiceComponent} from '../invoice/invoice.component';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-selector',
  templateUrl: './invoice-selector.component.html',
  styleUrls: ['./invoice-selector.component.css']
})
export class InvoiceSelectorComponent implements OnInit {

  customers: Customer[];
  selectedCustomer : Customer;
  invoice: Invoice;
  constructor(private router: Router, private customerService: CustomerService,  private invoiceService: InvoiceService) {

  }


  ngOnInit() {

        this.customerService.getCustomers().then(
          (customers) => {
            this.customers = customers;
            this.selectedCustomer = customers[0];
        })
  }

  onCustomerChange(event:string):void {
      this.selectedCustomer = JSON.parse(event);

      this.invoiceService.getInvoiceWithCustomerId(this.selectedCustomer._id).then((invoice) => {
          if (invoice != null){
            this.invoice = invoice;
            console.log(this.invoice._id)
          }

        });
  }

}
