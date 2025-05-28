import { Routes } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { PaginationComponent } from './pagination/pagination.component';

export const routes: Routes = [
  {
    path: '',
    component: Example1Component,
    pathMatch: 'full',
  },
  {
    path: 'page',
    component: PaginationComponent,
  },
];
