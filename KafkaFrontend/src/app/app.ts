import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('KafkaFrontend');

  Alerts: any;
  Confirm: boolean = false;

  selectedProduct = {
    productName: '',
    price: 0,
    quantity: 0,
  };

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {
    setTimeout(() => {
      this.Alerts = '';
    }, 2000);
  }

  ngOnInit(): void {
    this.getAlerts();
    this.cdr.detectChanges();
   
  }

  addProduct(data: any) {
    this.productService.addProducts(data).subscribe({
      next: (res) => {
        console.log(res);
        this.Confirm = true;
        console.log(this.Confirm);
        this.getAlerts();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAlerts() {
    this.productService.getAlerts().subscribe((res) => {
      this.Alerts = res;
      console.log(this.Alerts);
      console.log(res);
      this.cdr.detectChanges();
    });

    setTimeout(() => {
      this.Alerts = '';
    }, 2000);
  }
}
