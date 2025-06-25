import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css',
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string = '';
  icon = faTrash;
  editIcon = faEdit;
  constructor(private product: ProductService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.product.productList().subscribe((result) => {
      console.log(result);

      if (result) {
        this.productList = result;
      }
    });
  }

  deleteProduct(id: number) {
    console.log(id);

    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product Deleted Successfully';
        this.list();
      }
    });

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
