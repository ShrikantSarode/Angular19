import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDto } from '../models/order-dto';
import { OrderService } from '../service/order-service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth-service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.html',
  styleUrls: ['./order-summary.css'],
  imports: [CommonModule],
})
export class OrderSummary implements OnInit {
  obj: any;
  orders: OrderDto[] = [];

  orderSummarys?: OrderDto;
  total: number | undefined = 0;
  showDialog: boolean = false;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
 

    const data = this.route.snapshot.queryParamMap.get('data');
    if (data) {
      this.obj = JSON.parse(data);
      this.obj.userId = userId;
      this.orderSummarys = this.obj;

      if (this.orderSummarys?.articleList?.length) {
        this.total = this.orderSummarys.articleList.reduce((acc, item) => {
          return acc + (item.price || 0) * (item.quantity || 0);
        }, 0);
      } else {
        this.total = 0;
      }
    }
  }

  savedOrder() {
    if (this.orderSummarys && this.orderSummarys.articleList?.length) {
      for (const article of this.orderSummarys.articleList) {
        const payload = {
          userId: this.orderSummarys.userId,
          articleId: article.id,
          quantity: article.quantity,
          totalPrice: this.total,
        };
        console.log('Sending order payload:', payload);
 

        this.orderService.savedOrder(payload).subscribe(
          (res: any) => {
            console.log('Order created:', res);
            this.showDialog = true;
          },
          (err) => {
            console.error('Order creation failed:', err);
          }
        );
      }
      this.showDialog = true;
    }
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['']);
  }
}
