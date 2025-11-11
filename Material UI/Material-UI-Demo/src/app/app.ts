import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Header } from "./includes/header/header";
import { Footer } from "./includes/footer/footer";

@Component({
  selector: 'app-root',
 imports: [MatToolbarModule, RouterOutlet, MatButtonModule, MatIconModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Material-UI-Demo');
}
