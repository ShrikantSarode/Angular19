import { Component, OnInit } from '@angular/core';
import { Teachers } from '../../Models/teachers';
import { CommonModule } from '@angular/common';
import { TeacherServiceService } from '../../Services/teacher-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teachers-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './teachers-list.component.html',
  styleUrl: './teachers-list.component.css',
})
export class TeachersListComponent implements OnInit {
  teachers: Teachers[] = [];
  newTeacher: Teachers = { id: 0, name: 'teacher', subject: 'english' };

  constructor(private teachersServices: TeacherServiceService) {}

  ngOnInit(): void {
    this.teachersServices.getTeachers().subscribe((data) => {
      this.teachers = data;
    });
  }

  onSubmit() {
    this.teachersServices.addTeacher(this.newTeacher).subscribe(() => {
      this.teachers.push(this.newTeacher);
      console.log('Teacher Added Successfully!!!');

      this.newTeacher = { id: 0, name: '', subject: '' };
    });
  }
}
