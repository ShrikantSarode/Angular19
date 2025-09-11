import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateArticlesComponent } from './update-articles';

const routes: Routes = [
  { path: 'update-articles/:id', component: UpdateArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateArticlesRoutingModule {}
