import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user-services';
import { count } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {

  orders: number = 0;
  arts: number = 0;
  users: number = 0;
  constructor(
    private route: Router,
    private services: UserServices,
    private cdr: ChangeDetectorRef
  ) {}

  

  ngOnInit() {
    this.services.getUserCount().subscribe({
      next: (count) => {
        (this.users = count), console.log(this.users);
        this.cdr.detectChanges();
      },
    });
    this.services.getArtCount().subscribe({
      next: (count) => {
        (this.arts = count), console.log(this.arts);
        this.cdr.detectChanges();
      },
    });
    this.services.getOrderCount().subscribe({
      next: (count) => {
        (this.orders = count), console.log(this.orders);
        this.cdr.detectChanges();
      },

      error: (err) => console.error('Failed to fetch order count', err),
    });
  }

  Logout() {
    localStorage.clear();

    sessionStorage.clear();

    this.route.navigate(['/mfe1']);
  }

  NavigateToManageUsers() {
    console.log('clicked');
    this.route.navigate(['/mfe1/manage-user']);
  }

  yes() {
    console.log('Clicked');
    this.route.navigate(['/mfe1/overview']);
  }

  NavigateToManageArticles() {
 this.route.navigate(['/mfe1/manage-articles']);
}
}
