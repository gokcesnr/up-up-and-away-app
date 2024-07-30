import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './models/flight';


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

  bookTicket(flightId: number, customerData: any): Observable<any>{
    const bookignData = { flightId, ...customerData};
    return this.http.post('http://localhost:3000/bookings', bookignData);
  }
} 
