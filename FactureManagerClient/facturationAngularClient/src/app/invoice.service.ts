import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invoice } from './invoice'


@Injectable()

export class InvoiceService {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private invoicesUrl = 'http://localhost:3000/v1/invoices';
  private invoiceUrl = 'http://localhost:3000/v1/invoice';

  getInvoices(): Promise<Invoice[]> {
    return this.http.get(this.invoicesUrl)
      .toPromise()
      .then(response => response.json().invoices as Invoice[])
      .catch(this.handleError);
  }


  getInvoice(id: string): Promise<Invoice> {
    const url = `${this.invoiceUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().invoice as Invoice)
      .catch(this.handleError);
  }


  createInvoice(invoice: Invoice): Promise<Invoice> {
    return this.http
      .post(this.invoiceUrl, JSON.stringify(invoice), { headers: this.headers })
      .toPromise()
      .then(res => res.json().invoice as Invoice)
      .catch(this.handleError);
  }

  updateInvoice(invoice: Invoice): Promise<Invoice> {
    const url = `${this.invoiceUrl}`;
    return this.http
      .put(url, JSON.stringify(invoice).replace('"'+ invoice.price.toString() +'"',invoice.price.toString()), { headers: this.headers })
      .toPromise()
      .then(() => invoice)
      .catch(this.handleError);
  }

  deleteInvoice(invoice: Invoice): Promise<void> {
    const url = `${this.invoiceUrl}/${invoice._id}`;
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
