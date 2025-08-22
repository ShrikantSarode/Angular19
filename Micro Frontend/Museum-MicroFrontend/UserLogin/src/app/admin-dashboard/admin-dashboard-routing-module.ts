import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard';
import { UserLogin } from '../user-login/user-login';
import { ManageUser } from '../manage-user/manage-user';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboard },
  { path: 'overview', component: UserLogin },
   {path:'manage-user',component:ManageUser}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
