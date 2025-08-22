import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOrders } from './user-orders';

const routes: Routes = [
  {path:'user-orders',component:UserOrders}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserOrdersRoutingModule { }
