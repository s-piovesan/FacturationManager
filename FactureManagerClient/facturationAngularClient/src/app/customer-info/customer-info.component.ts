import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service'


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.customerService.getCustomer(params['id']))
      .subscribe(customer => this.customer = customer);
  }
  updateCustomer(): void {
    this.customerService.updateCustomer(this.customer).then(() => {
      this.goBack();
    });

  }
  goBack(): void {
    this.router.navigate(['/customers']);
  }

}
