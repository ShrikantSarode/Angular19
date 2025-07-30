import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCatalogue } from './article-catalogue';
import { OrderSummary } from '../order-summary/order-summary';


const routes: Routes = [
  {path:'',component:ArticleCatalogue},
  {path:'orderSummary',component:OrderSummary}, 
 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleCatalogueRoutingModule { }
