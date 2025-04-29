import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // private apiUrl = 'https://localhost:3000/';

  private reservations: Reservation[] = [];

  constructor() {
    let savedReservation=localStorage.getItem('reservations')
    this.reservations = savedReservation?JSON.parse(savedReservation):[];
  }

  //crud

  getReservations(): Reservation[] {
    return this.reservations;

  }

  // getReservations(): Observable<Reservation[]> {
  //   return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  // }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updateReservation: Reservation): void {
    let index = this.reservations.findIndex(
      (res) => res.id === updateReservation.id
    );
    this.reservations[index] = updateReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
