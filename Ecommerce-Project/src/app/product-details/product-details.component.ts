import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productResult: undefined | product;

  productQuantity: number = 1;

  constructor(
    private activedRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.activedRoute.snapshot.paramMap.get('productId');
    console.log(productId);

    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        console.warn(result);

        this.productResult = result;
      });
  }

  handleQuantity(val: string) {
    if (val === 'plus') {
      this.productQuantity += 1;
    } else if (val === 'minus' && this.productQuantity > 1) {
      this.productQuantity -= 1;
    }
  }
}
