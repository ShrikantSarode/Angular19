import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {

  toggleLogin: boolean = false;

  constructor(private route: Router, private loginServices: UserServices) {}

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
        this.route.navigate(['/mfe1/dashboard']);  
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Login failed. Please check your credentials.');
      },
    });
  }

}
