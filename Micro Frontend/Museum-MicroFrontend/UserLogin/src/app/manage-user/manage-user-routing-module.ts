import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUser } from './manage-user';

const routes: Routes = [
  {path:'manage-user',component:ManageUser}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserRoutingModule { }
