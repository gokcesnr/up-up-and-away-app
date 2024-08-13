import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Flight } from './models/flight';
import { Ticket } from './models/ticket';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:3000';
  private selectedFlight: Flight | undefined;
  private bookedTickets: Ticket[] = [];

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl + "/flights");
  }

  getFlightById(id: number): Observable<Flight>{
    return this.http.get<Flight>('${this.apiUrl}/${id}');
  }

  setSelectedFlight(flight: Flight): void{
    this.selectedFlight = flight;
  }

  getSelectedFlight(): Flight | undefined{
    return this.selectedFlight;
  }

  bookTicket(ticket: Ticket): void{
    this.bookedTickets.push(ticket);
  }

  getBookedTickets(): Ticket[]{
    return this.bookedTickets;
  }
} 
