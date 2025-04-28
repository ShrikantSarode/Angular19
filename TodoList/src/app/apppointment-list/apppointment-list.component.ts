import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apppointment-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './apppointment-list.component.html',
  styleUrl: './apppointment-list.component.css',
})
export class ApppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments');

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointments));

      // alert(this.appointments.length)
    }
  }

  // delte

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);

    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
