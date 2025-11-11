import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  addArticle(data: any): Observable<any> {
    return this.http
      .post('http://localhost:9092/artCatalogue/addArticle', data)
      .pipe(catchError(this.handleError));
  }

  getArticleById(id: number): Observable<any> {
    return this.http
      .get<any>(`http://localhost:9092/artCatalogue/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateArticle(id: number, articleData: any): Observable<any> {
    return this.http
      .put<any>(
        `http://localhost:9092/artCatalogue/updateArticle/${id}`,
        articleData
      )
      .pipe(catchError(this.handleError));
  }

  deleteArticle(id: number): Observable<string> {
    return this.http
      .delete(`http://localhost:9092/artCatalogue/deleteArticleById/${id}`, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';

    if (error.error) {
      if (typeof error.error === 'object' && !Array.isArray(error.error)) {
        const errorKeys = Object.keys(error.error);
        if (errorKeys.length > 0) {
          errorMessage = errorKeys
            .map((key) => `${key}: ${error.error[key]}`)
            .join(', ');
        }
      } else if (typeof error.error === 'string') {
        errorMessage = error.error;
      } else if (error.error.message) {
        errorMessage = error.error.message;
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    console.error('Backend error details:', {
      status: error.status,
      statusText: error.statusText,
      error: error.error,
      message: errorMessage,
    });

    return throwError(() => errorMessage);
  }
}
