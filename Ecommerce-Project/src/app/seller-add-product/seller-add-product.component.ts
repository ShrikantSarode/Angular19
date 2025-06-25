import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css',
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;
  constructor(private product: ProductService,private router:Router) {}

  ngOnInit(): void {}

  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.log(result);
      if(result){
        this.addProductMessage="Product Added successfully!!"
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
    this.router.navigate(['seller-home'])
  }
}
