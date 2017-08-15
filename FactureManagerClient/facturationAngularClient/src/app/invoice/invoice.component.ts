import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  customer: Customer;
  invoice: Invoice;

  constructor(private router: Router, private customerService: CustomerService, private invoiceService: InvoiceService) {
  }

  print(): void {
       let printContents, popupWin;
       printContents = document.getElementById('printSection').innerHTML;
       popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
       popupWin.document.open();
       popupWin.document.write(`
          <html>
              <head>
                  <title>Print tab</title>
                  <!-- Compiled and minified CSS -->
                   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css">
                   <!-- Compiled and minified JavaScript -->
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>
              </head>
              <body onload="window.print();window.close()">${printContents}
              </body>
          </html>`
       );
       popupWin.document.close();
    }

  ngOnInit() {
    this.invoiceService.getInvoiceWithCustomerId("5984c7249922b1037cb7807").then(
      (invoice) => {
        this.invoice = invoice;
        this.customerService.getCustomer(invoice.customerId).then(
          (customer) => {
            this.customer = customer;
            console.log(this);
        })
      });
  }

}
