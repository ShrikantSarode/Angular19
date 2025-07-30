import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class CatalogService {

  apiUrl = 'http://localhost:9092/artCatalogue';

  constructor(private http:HttpClient,private route:Router) { }

  getCatalog(){
    return this.http.get(`${this.apiUrl}/allArticles`);
  }
  
}
