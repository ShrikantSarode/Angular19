import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  popularProducts: undefined | product[];

  trendyProducts: undefined | product[];

  constructor(private product: ProductService) {}

  ngOnInit() {
    this.product.popularProducts().subscribe((result) => {
      // console.log(result);

      this.popularProducts = result;
    });

    this.product.trendyProducts().subscribe((data) => {
      console.log("Data called");
      
      this.trendyProducts = data;
    });
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
