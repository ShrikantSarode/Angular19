import { Component, OnInit } from '@angular/core';
import { Student } from '../../Models/student';
import { StudentServiceService } from '../../Services/student-service.service';
import { CommonModule } from '@angular/common';
import { Teachers } from '../../Models/teachers';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  teachers: Teachers[] = [];
  newStudent: Student = { id: 1, name: 'shri', age: 12 }; //form

  constructor(private studentService: StudentServiceService) {}

  ngOnInit(): void {
    this.studentService.getStudent().subscribe((data) => {
      this.students = data;
    });
  }

  onSubmit(): void {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.students.push(this.newStudent);
      console.log('Student Added Successfully', this.newStudent);
      // localStorage.setItem('student',JSON.stringify(this.newStudent))

      this.newStudent = { id: 0, name: '', age: 0 };
    });
  }
}
