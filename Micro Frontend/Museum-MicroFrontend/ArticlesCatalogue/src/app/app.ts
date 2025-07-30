import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleCatalogue } from "./article-catalogue/article-catalogue";
import { OrderSummary } from "./order-summary/order-summary";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleCatalogue, OrderSummary],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ArticlesCatalogue');
}
