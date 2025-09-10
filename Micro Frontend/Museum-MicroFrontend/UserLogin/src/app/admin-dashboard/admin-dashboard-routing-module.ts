import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard';
import { UserLogin } from '../user-login/user-login';
import { ManageUser } from '../manage-user/manage-user';
import { UpdateUser } from '../update-user/update-user';
import { ManageArticles } from '../manage-articles/manage-articles';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboard },
  { path: 'overview', component: UserLogin },
  { path: 'manage-user', component: ManageUser },
  { path: 'update-user/:id', component: UpdateUser },
  { path: 'manage-articles', component: ManageArticles },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
