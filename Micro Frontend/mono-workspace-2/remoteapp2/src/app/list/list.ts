import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class List {
  listProducts: any[] = [];

  // constructor(private productList: ProductList) {}
  constructor(private https: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.https.get<any>('http://localhost:3000/products').subscribe((res) => {
      console.log(res);
      this.listProducts = res;

      console.log(this.listProducts);
    });
  }
}
