import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./Pages/student-list/student-list.component";
import { TeachersListComponent } from "./Pages/teachers-list/teachers-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent, TeachersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApiIntegration';
}
