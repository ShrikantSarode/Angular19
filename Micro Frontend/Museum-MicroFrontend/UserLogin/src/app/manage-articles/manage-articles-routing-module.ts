import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageArticles } from './manage-articles';

const routes: Routes = [
  {path:'manage-articles',component:ManageArticles}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageArticlesRoutingModule { }
