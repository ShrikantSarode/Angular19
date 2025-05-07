import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teachers } from '../Models/teachers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherServiceService {
  private apiUrl = 'http://localhost:3002/';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teachers[]> {
    return this.http.get<Teachers[]>(this.apiUrl + 'teachers');
  }

  addTeacher(teacher: Teachers): Observable<Teachers> {
    return this.http.post<Teachers>(this.apiUrl + 'addTeacher', teacher);
  }
}
