import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CounterApp';

  count = 0;

  handleIncrement() {

    this.count = this.count + 1;

  }

  handleReset() {

    this.count = 0;

  }

  handleDecrement() {

    if (this.count > 0) {
      this.count = this.count - 1;
    }

  }
}
