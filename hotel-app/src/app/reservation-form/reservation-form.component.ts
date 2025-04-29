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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
 

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HomeComponent,RouterModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      let reservation = this.reservationService.getReservation(id);
      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
  
      let id = this.activatedRoute.snapshot.paramMap.get('id');
  
      if (id) {
        // Update reservation
        this.reservationService.updateReservation(id, reservation);
      } else {
        // Add new reservation
        this.reservationService.addReservation(reservation);
      }
  
      console.log('Reservation submitted:', this.reservationForm.value);
      this.reservationForm.reset();
  
      this.router.navigate(['/list']);
    } else {
      console.error('Form is invalid');
    }
  }
  
}
