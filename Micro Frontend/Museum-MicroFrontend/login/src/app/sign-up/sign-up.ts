import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../services/login-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.css'],
  imports: [FormsModule]
})
export class SignUp {
  formData = {
    username: '',
    password: '',
    roles: [{ name: 'USER' }]  
  };

  constructor(private route: Router, private loginServices: LoginServices) {}

  signup() {
    console.log('Submitting:', this.formData);
    this.loginServices.signUp(this.formData).subscribe({
      next: (res) => {
        console.log('Signup successful:', res);
        alert('Signup successful!');
        this.route.navigate(['/']);  
      },
      error: (err) => {
        console.error('Signup failed:', err);
        alert('Signup failed. Please try again.');
      }
    });
  }
}
