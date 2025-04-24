import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';

export const routes: Routes = [
  {
    path: '/',
    component: DetailsComponent,
  },{
    path:"/add",
    component:AddComponent
  },{
    path:"/update",
    component:UpdateComponent
  },
];
