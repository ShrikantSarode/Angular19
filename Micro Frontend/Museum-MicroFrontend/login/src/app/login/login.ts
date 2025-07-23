import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  toggleLogin: boolean = false;

  constructor(private route:Router) {}

  toggle() {
    if(this.toggleLogin){
      this.toggleLogin = false;
      this.route.navigate(['signUp']);
    }else{
      this.toggleLogin = true;
    }
  }


}
