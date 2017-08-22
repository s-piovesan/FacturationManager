import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Line } from './line'


@Injectable()

export class LineService {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private linesUrl = 'http://localhost:3000/v1/lines';
  private lineUrl = 'http://localhost:3000/v1/line';
  private invoiceUrl = 'http://localhost:3000/v1/invoice';

  getLinesWithInvoiceId(invoiceId : string): Promise<Line[]> {
    return this.http.get(`${this.invoiceUrl}/${invoiceId}/lines`)
      .toPromise()
      .then(response => response.json().lines as Line[])
      .catch(this.handleError);
  }


  getLine(id: string): Promise<Line> {
    const url = `${this.lineUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().line as Line)
      .catch(this.handleError);
  }

  createLine(line: Line): Promise<Line> {
    return this.http
      .post(this.lineUrl, JSON.stringify(line), { headers: this.headers })
      .toPromise()
      .then(res => res.json().line as Line)
      .catch(this.handleError);
  }

  updateLine(line: Line): Promise<Line> {
    const url = `${this.lineUrl}`;
    return this.http
      .put(url, JSON.stringify(line), { headers: this.headers })
      .toPromise()
      .then(() => line)
      .catch(this.handleError);
  }

  deleteLine(line: Line): Promise<void> {
    const url = `${this.lineUrl}/${line._id}`;
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
