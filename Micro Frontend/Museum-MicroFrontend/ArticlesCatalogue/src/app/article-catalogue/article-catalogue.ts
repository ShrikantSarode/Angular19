import { ChangeDetectorRef, Component } from '@angular/core';
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

  public Math = Math;

  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.catalogService.getCatalog().subscribe((res: any) => {
      this.artItems = res.map((item: any) => ({ ...item, quantity: 0 }));
      this.cdr.detectChanges();
      console.log(this.artItems);
    });
  }

  decrementQuantity(art: any) {
    if (!art) return;

    if (art.quantity > 0) {
      art.quantity = art.quantity - 1;

      const index = this.artItemsCart.findIndex((item) => item.id === art.id);

      if (art.quantity === 0 && index !== -1) {
        this.artItemsCart.splice(index, 1);
      } else if (index !== -1) {
        this.artItemsCart[index] = { ...art };
      } else if (art.quantity > 0) {
        this.artItemsCart.push({ ...art });
      }
    } else {
      art.quantity = 0;
    }
  }

  incrementQuantity(art: any) {
    if (!art) return;

    const max = Number.isFinite(art?.remainingStock) ? art.remainingStock : 0;
    if (art.quantity >= max) {
      alert(
        max > 0
          ? `Only ${max} left in stock for "${art.artName}".`
          : `"${art.artName}" is out of stock.`
      );
      return;
    }

    art.quantity = art.quantity + 1;

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
