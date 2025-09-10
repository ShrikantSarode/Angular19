import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'UserLogin', pathMatch: 'full' },
  {
    path: 'UserLogin',
    loadChildren: () =>
      import('./user-login/user-login-module').then((m) => m.UserLoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard-module').then(
        (m) => m.AdminDashboardModule
      ),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./user-login/user-login-module').then((m) => m.UserLoginModule),
  },
  {
    path: 'manage-user',
    loadChildren: () =>
      import('./manage-user/manage-user-module').then(
        (m) => m.ManageUserModule
      ),
  },
  {
    path: 'user-orders',
    loadChildren: () =>
      import('./user-orders/user-orders-module').then(
        (m) => m.UserOrdersModule
      ),
  },
  {
    path: 'update-user',
    loadChildren: () =>
      import('./update-user/update-user-module').then(
        (m) => m.UpdateUserModule
      ),
  },
  {
    path: 'manage-articles',
    loadChildren: () =>
      import('./manage-articles/manage-articles-module').then(
        (m) => m.ManageArticlesModule
      ),
  },
];
