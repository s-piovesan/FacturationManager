import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;
  newCustomer: Customer;

  constructor(private router: Router, private customerService: CustomerService) {

  }

  ngOnInit() {
    this.customerService.getCustomers().then(customers => this.customers = customers);
    this.newCustomer = new Customer();
  }

  createCustomer(customer: Customer): void {

    this.customerService.createCustomer(customer)
      .then(customer => {
        this.customers.push(customer);
        this.selectedCustomer = null;
      });
  }

  deleteCustomer(customer: Customer): void {
    this.customerService
      .deleteCustomer(customer)
      .then(() => {
        this.customers = this.customers.filter(b => b !== customer);
        if (this.selectedCustomer === customer) { this.selectedCustomer = null; }
      });
  }

  showInfo(customer: Customer): void {
    this.selectedCustomer = customer;
    this.router.navigate(['/customerinformation', this.selectedCustomer._id]);
  }
}
