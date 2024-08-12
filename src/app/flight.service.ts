import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './models/flight';
import { Ticket } from './models/ticket';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:3000';
  private selectedFlight: Flight | undefined;

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

  bookTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>('http://localhost:3000/booked-tickets', ticket);
  }

  getBookedTickets(): Observable <Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:3000/booked-tickets');
  }

  addBookedTickets(ticket: Ticket): Observable<Ticket> {
    const headers = new HttpHeaders ({ 'Content-Type': 'application/json'});
    return this.http.post<Ticket>(this.apiUrl, ticket, {headers});
  }


} 
