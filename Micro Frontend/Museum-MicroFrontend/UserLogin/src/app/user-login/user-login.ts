import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.html',
  styleUrls: ['./user-login.css'],
})
export class UserLogin {
  toggleLogin = false;
  signupSuccess = false;
  errorMessage: string | null = null;

  formData = {
    userName: '',
    email: '',
    password: '',
    role: '',
  };

  constructor(
    private route: Router,
    private loginServices: UserServices,
    private cdr: ChangeDetectorRef
  ) {}

  toggle(): void {
    this.toggleLogin = !this.toggleLogin;
    this.signupSuccess = false;
    this.errorMessage = null;
    this.cdr.detectChanges();
  }

  signUp(): void {
    this.errorMessage = null;
    this.cdr.detectChanges();

    this.loginServices.signUp(this.formData).subscribe({
      next: (res: any) => {
        this.signupSuccess = true;
        this.toggleLogin = true;
        this.cdr.detectChanges();
        console.log('Sign up successful:', res);
      },
      error: (err: string) => {
        console.error('Sign up failed:', err);
        this.errorMessage = err;
        this.cdr.detectChanges();
      },
    });
  }

  login(): void {
    this.errorMessage = null;
    this.cdr.detectChanges();
    console.log('Logging in with:', this.formData);

    this.loginServices.login(this.formData).subscribe({
      next: (res: any) => {
        console.log('Login successful:', res);

        // Store token
        localStorage.setItem('token', res.token);

        const decoded = jwtDecode<{ userId: number; roles: string[] }>(
          res.token
        );
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
      error: (err: string) => {
        console.error('Login failed:', err);
        this.errorMessage = err;
        this.cdr.detectChanges();
      },
    });
  }
}
