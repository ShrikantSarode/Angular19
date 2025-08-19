import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login';
import { SignUp } from '../sign-up/sign-up';
import { AdminDashboard } from '../admin-dashboard/admin-dashboard';
import { AddUsers } from '../manage-user/add-users/add-users';
import { UpdateUsers } from '../manage-user/update-users/update-users';
import { ManageUser } from '../manage-user/manage-user';

const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'signUp',
    component: SignUp,
  },

  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'manage-users',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: AdminDashboard,
      },
      {
        path: 'manage-users',
        component: ManageUser,
        children: [
          { path: 'add', component: AddUsers },
          { path: 'update', component: UpdateUsers },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
