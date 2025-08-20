import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'UserLogin',pathMatch:'full'},
    {path:'UserLogin',loadChildren:()=>import('./user-login/user-login-module').then(m=>m.UserLoginModule)},
    {path:'dashboard',loadChildren:()=>import('./admin-dashboard/admin-dashboard-module').then(m=>m.AdminDashboardModule)}
];
