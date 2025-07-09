import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  UserSignUp(data: signUp) {
    return this.http.post('http://localhost:3000/seller', data, {
      observe: 'response',
    });
  }

  handleSellerAuth(result: any) {
    if (result && result.body) {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      localStorage.setItem('sellerToken', 'true');
      alert('SignUp Successful');
      this.router.navigate(['/']);
      this.router.navigate(['seller-home']);
    }
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data: login) {
    // console.log(data);
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        console.log(result);

        if (result && result.body.length === 1) {
          this.isLoginError.emit(false);
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        } else {
          console.log('Login Failed');
          this.isLoginError.emit(true);
        }
      });
  }
}
