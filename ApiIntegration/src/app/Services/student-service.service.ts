import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import { Teachers } from '../Models/teachers';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  private apiUrl = 'http://localhost:3002/';
 

  constructor(private http: HttpClient) {}

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl+"students");
  }



  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl+"addStudent", student);
  }
}
