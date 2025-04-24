import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';   

export interface Location {
  locationId: number;
  locationName: string;
  code: string;
}

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private apiUrl = environment.apiUrl;  

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

   // Search buses
   searchBuses(from: number, to: number, travelDate: string): Observable<any> {
    
    const url = `${this.apiUrl}/searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${encodeURIComponent(travelDate)}`;
    // console.log('API URL:', url); 
    return this.http.get(url);
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
