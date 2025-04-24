import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApppointmentListComponent } from "./models/apppointment-list/apppointment-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApppointmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';
}
