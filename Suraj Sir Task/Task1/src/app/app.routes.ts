import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Grid1Component } from './grid1/grid1.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'task1',
    component: Task1Component,
  },
  {
    path: 'task2',
    component: Task2Component,
  },
  {
    path: 'grid1',
    component: Grid1Component,
  },
  // {
  //   path: 'grid2',
  //   component: Grid2Component,
  // },
];
