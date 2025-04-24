import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  display = true;
  toggleDiv = true;
  // x=30;

  hide() {
    this.display = false
  }

  show() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }
  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }

}
