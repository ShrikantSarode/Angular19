import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddArticle } from "./add-article/add-article";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddArticle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Admin-Add-Article');
}
