import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './interface/model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  ArticleList(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:8085/article/all');
  }

  addArticle(data: Article): Observable<Article> {
    return this.http.post<Article>('http://localhost:8085/article/add', data);
  }

  deleteArticle(id: number) {
    return this.http.delete(`http://localhost:8085/article/delete/${id}`);
  }
}
