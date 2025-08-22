import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {
NavigateToManageUsers() {
console.log("clicked");
this.route.navigate(['/mfe1/manage-user']);

}

  constructor(private route:Router) { }
yes() {
console.log("Clicked");
this.route.navigate(['/mfe1/overview']);

}

}
