import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginServices } from '../services/login-services';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  toggleLogin: boolean = false;

  constructor(private route: Router, private loginServices: LoginServices) {}

  formData = {
    email: '',
    password: '',
  };

  toggle() {
    this.toggleLogin = !this.toggleLogin;
    if (this.toggleLogin) {
      this.route.navigate(['signUp']);
    }
  }

  login() {
    console.log('Logging in with:', this.formData);
    this.loginServices.login(this.formData).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        alert('Login successful!');
        this.route.navigate(['/dashboard']); // or wherever you want to redirect
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Login failed. Please check your credentials.');
      },
    });
  }
}
