import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleCatalogueRoutingModule } from './article-catalogue-routing-module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticleCatalogueRoutingModule,
    HttpClientModule
  ]
})
export class ArticleCatalogueModule { }
