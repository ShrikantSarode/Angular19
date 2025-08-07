import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticle } from './add-article';

const routes: Routes = [
  {path:'',component: AddArticle}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddArticleRoutingModule { }
