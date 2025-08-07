import { Component } from '@angular/core';
import { CatalogService } from '../service/catalog-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-catalogue.html',
  styleUrls: ['./article-catalogue.css'],
})
export class ArticleCatalogue {
  quantity: number = 0;
  artItems: any[] = [];
  artItemsCart: any[] = [];
  orderSummary: any = {};

  constructor(private catalogService: CatalogService, private router: Router) {}

  ngOnInit() {
    this.catalogService.getCatalog().subscribe((res: any) => {
      this.artItems = res.map((item: any) => ({ ...item, quantity: 0 }));
      console.log(this.artItems);
    });
  }

  decrementQuantity(art: any) {
    if (art.quantity > 0) {
      art.quantity--;

      const index = this.artItemsCart.findIndex((item) => item.id === art.id);

      if (art.quantity === 0 && index !== -1) {
        this.artItemsCart.splice(index, 1);
      } else if (index !== -1) {
        this.artItemsCart[index] = { ...art };
      }
    }
  }

  incrementQuantity(art: any) {
    art.quantity++;

    const index = this.artItemsCart.findIndex((item) => item.id === art.id);

    if (index === -1) {
      this.artItemsCart.push({ ...art });
    } else {
      this.artItemsCart[index] = { ...art };
    }
  }

  onCheckedOut() {
    this.orderSummary = {
      artItemsList: [...this.artItemsCart],
    };

    this.orderSummary.articleList = this.artItemsCart;

    this.router.navigate(['mfe2/orderSummary'], {
      queryParams: { data: JSON.stringify(this.orderSummary) },
    });
  }
}
