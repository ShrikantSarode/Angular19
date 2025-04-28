import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({


  });

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);
      console.log(this.reservationForm.value);
      this.reservationForm.reset();

      this.router.navigate(['/list'])
      
    }
  }
}
