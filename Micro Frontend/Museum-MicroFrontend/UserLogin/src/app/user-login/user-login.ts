import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css',
})
export class UserLogin {
  toggleLogin: boolean = false;
  signupSuccess = false;

  constructor(private route: Router, private loginServices: UserServices) {}

  formData = {
    userName: '',
    email: '',
    password: '',
    role: '',
  };

  toggle() {
    this.toggleLogin = !this.toggleLogin;
    this.signupSuccess = false;
  }

  signUp() {
    this.loginServices.signUp(this.formData).subscribe({
      next: (res: any) => {
         
          this.signupSuccess = true;
          this.toggleLogin = true;
          console.log(this.toggleLogin);
          console.log('Sign up successful:', res);
        

        // alert('Sign up successful!');

        this.route.navigate(['/mfe1']);
      },
      error: (err) => {
        console.error('Sign up failed:', err);
        alert('Sign up failed. Please check your credentials.');
      },
    });
  }

  login() {
  console.log('Logging in with:', this.formData);

  this.loginServices.login(this.formData).subscribe({
    next: (res: any) => {
      console.log('Login successful:', res);
      alert('Login successful!');

      // Store token
      localStorage.setItem('token', res.token);

      
const decoded = jwtDecode<{ userId: number, roles: string[] }>(res.token);
      localStorage.setItem('userId', decoded.userId.toString());
      localStorage.setItem('role', decoded.roles[0]);


      // Role-based navigation
      const role = res.role;
      if (role === 'Admin') {
        this.route.navigate(['/mfe1/dashboard']);
      } else if (role === 'User') {
        this.route.navigate(['/mfe2']);
      } else {
        alert('Unknown role. Access denied.');
      }
    },
    error: (err) => {
      console.error('Login failed:', err);
      alert('Login failed. Please check your credentials.');
    },
  });
}


  // login() {
  //   console.log('Logging in with:', this.formData);
  //   this.loginServices.login(this.formData).subscribe({
  //     next: (res: any) => {
  //       console.log('Login successful:', res);
  //       alert('Login successful!');

  //       localStorage.setItem('token', res.token);

  //       this.route.navigate(['/mfe1/dashboard']);
  //     },
  //     error: (err) => {
  //       console.error('Login failed:', err);
  //       alert('Login failed. Please check your credentials.');
  //     },
  //   });
  // }
}
