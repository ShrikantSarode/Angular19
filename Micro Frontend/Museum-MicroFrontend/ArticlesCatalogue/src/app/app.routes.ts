import { Routes } from '@angular/router';
import { ArticleCatalogue } from './article-catalogue/article-catalogue';
import { OrderSummary } from './order-summary/order-summary';

export const routes: Routes = [
  { path: '', component: ArticleCatalogue },
  { path: 'orderSummary', component: OrderSummary },
 
];
