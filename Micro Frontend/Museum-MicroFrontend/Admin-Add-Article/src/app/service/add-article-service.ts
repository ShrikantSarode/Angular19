import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'any'
})
export class AddArticleService {

  constructor(private http: HttpClient) { }

  addArticle(data: Article) {
    return this.http.post('http://localhost:9092/artCatalogue/addArticle', data);
  }
  
}
