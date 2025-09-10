import { ChangeDetectorRef, Component } from '@angular/core';
import { UserServices } from '../services/user-services';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-articles',
  imports: [CommonModule,RouterLink],
  templateUrl: './manage-articles.html',
  styleUrl: './manage-articles.css'
})
export class ManageArticles {

    quantity: number = 0;
  artItems: any[] = [];
  artItemsCart: any[] = [];
  orderSummary: any = {};

  constructor(private Services: UserServices, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.Services.getCatalog().subscribe((res: any) => {
      this.artItems = res.map((item: any) => ({ ...item, quantity: 0 }));
      this.cdr.detectChanges();
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

}
