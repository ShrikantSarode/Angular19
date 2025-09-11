import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/datatypes';

@Injectable({
  providedIn: 'any',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  addArticle(data: any) {
    return this.http.post(
      'http://localhost:9092/artCatalogue/addArticle',
      data
    );
  }

  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:9092/artCatalogue/${id}`);
  }

  update(article: Article): Observable<void> {
    return this.http.put<void>(
      `http://localhost:9092/artCatalogue/updateArticle/${article.articleId}`,
      article
    );
  }

  deleteArticle(id: number) {
    return this.http.delete(
      `http://localhost:9092/artCatalogue/deleteArticleById/${id}`
    );
  }
}
