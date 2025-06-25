import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  imports: [FormsModule],
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css',
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  productMessage: string|undefined = '';

  constructor(
    private router: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.router.snapshot.paramMap.get('id');
    console.log(productId);

    if (productId != null) {
      this.product.getProduct(productId).subscribe((data) => {
        console.log(data);

        this.productData = data;
      });
    }
  }

  submit(data: product) {
    console.log(data);

    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
