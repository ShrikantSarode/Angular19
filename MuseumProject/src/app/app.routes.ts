import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'add-article',
    component: AddArticleComponent,
  },
];
