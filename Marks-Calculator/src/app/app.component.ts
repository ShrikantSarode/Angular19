import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarksComponent } from "./pages/marks/marks.component";

@Component({
  selector: 'app-root',
  imports: [ MarksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marks-Calculator';
}
