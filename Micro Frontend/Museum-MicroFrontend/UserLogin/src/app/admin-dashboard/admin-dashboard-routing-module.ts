import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard';
import { UserLogin } from '../user-login/user-login';
import { ManageUser } from '../manage-user/manage-user';
import { UpdateUser } from '../update-user/update-user';
import { ManageArticles } from '../manage-articles/manage-articles';
import { AddArticles } from '../add-articles/add-articles';

import { HttpClient } from '@angular/common/http';
import { UpdateArticlesComponent } from '../update-articles/update-articles';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboard },
  { path: 'overview', component: UserLogin },
  { path: 'manage-user', component: ManageUser },
  { path: 'update-user/:id', component: UpdateUser },
  { path: 'manage-articles', component: ManageArticles },
  { path: 'add-articles', component: AddArticles },
  { path: 'update-articles/:id', component: UpdateArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HttpClient],
})
export class AdminDashboardRoutingModule {}
