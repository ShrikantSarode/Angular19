import { Component } from '@angular/core';
import { LoginRoutingModule } from "../login/login-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [LoginRoutingModule,RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

}
