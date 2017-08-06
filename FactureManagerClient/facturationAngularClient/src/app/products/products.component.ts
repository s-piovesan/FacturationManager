import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  newProduct: Product;

  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts().then(products => this.products = products);
    this.newProduct = new Product();
  }

  createProduct(product: Product): void {

    this.productService.createProduct(product)
      .then(product => {
        console.log(product);
        this.products.push(product);
        this.selectedProduct = null;
      });
  }

  deleteProduct(product: Product): void {
    this.productService
      .deleteProduct(product)
      .then(() => {
        this.products = this.products.filter(b => b !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
      });
  }

  showInfo(product: Product): void {
    this.selectedProduct = product;
    this.router.navigate(['/productinformation', this.selectedProduct._id]);
  }
}
