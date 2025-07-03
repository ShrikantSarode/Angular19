import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: product[] | undefined;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const sellerDataString = localStorage.getItem('seller');
        if (sellerDataString && event.url.includes('seller')) {
          console.log('This is seller area');
          const sellerData = JSON.parse(sellerDataString)[0];
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else {
          console.log('Outside seller area');
          this.menuType = 'default';
        }
      }
    });
  }

  logout(): void {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  searchProduct(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    let query = input.value.trim();

    if (query.length > 0) {
      this.productService.searchProduct(query).subscribe((result) => {
        this.searchResult = result;

        console.log(result);
      });
    } else {
      this.searchResult = [];
    }
  }

  submitSearch(value: string) {
    console.warn(value);

    this.router.navigate([`search/${value}`]);
  }

  hideSearch() {
    this.searchResult = undefined;
  }
}
