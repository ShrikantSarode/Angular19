import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { SideNavComponent } from "./pages/side-nav/side-nav.component";
import { DetailsComponent } from "./pages/details/details.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SideNavComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HttpServices';
}
