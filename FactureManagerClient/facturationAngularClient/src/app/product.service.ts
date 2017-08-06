import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product'


@Injectable()

export class ProductService {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private productsUrl = 'http://localhost:3000/v1/products';
  private productUrl = 'http://localhost:3000/v1/product';

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => response.json().products as Product[])
      .catch(this.handleError);
  }


  getProduct(id: string): Promise<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().product as Product)
      .catch(this.handleError);
  }


  createProduct(product: Product): Promise<Product> {
    return this.http
      .post(this.productUrl, JSON.stringify(product).replace('"'+ product.price.toString() +'"',product.price.toString()), { headers: this.headers })
      .toPromise()
      .then(res => res.json().product as Product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productUrl}`;
    return this.http
      .put(url, JSON.stringify(product).replace('"'+ product.price.toString() +'"',product.price.toString()), { headers: this.headers })
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  deleteProduct(product: Product): Promise<void> {
    const url = `${this.productUrl}/${product._id}`;
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
