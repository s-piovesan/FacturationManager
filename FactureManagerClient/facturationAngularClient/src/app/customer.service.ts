import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer'


@Injectable()

export class CustomerService {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private customersUrl = 'http://localhost:3000/v1/customers';
  private customerUrl = 'http://localhost:3000/v1/customer';

  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json().customers as Customer[])
      .catch(this.handleError);
  }


  getCustomer(id: String): Promise<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().customer as Customer)
      .catch(this.handleError);
  }


  createCustomer(customer: Customer): Promise<Customer> {
    return this.http
      .post(this.customerUrl, JSON.stringify(customer), { headers: this.headers })
      .toPromise()
      .then(res => res.json().customer as Customer)
      .catch(this.handleError);
  }

  updateCustomer(customer: Customer): Promise<Customer> {
    const url = `${this.customerUrl}`;
    return this.http
      .put(url, JSON.stringify(customer), { headers: this.headers })
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }

  deleteCustomer(customer: Customer): Promise<void> {
    const url = `${this.customerUrl}/${customer._id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
