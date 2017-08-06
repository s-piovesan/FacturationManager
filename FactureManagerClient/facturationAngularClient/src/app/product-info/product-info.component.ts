import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service'


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.productService.getProduct(params['id']))
      .subscribe(product => this.product = product);
  }
  updateProduct(): void {
    this.productService.updateProduct(this.product).then(() => {
      this.goBack();
    });

  }
  goBack(): void {
    this.router.navigate(['/products']);
  }

}
