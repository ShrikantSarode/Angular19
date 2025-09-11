import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticles } from './add-articles';

const routes: Routes = [
  {path:'add-articles',component:AddArticles}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddArticlesRoutingModule { }
