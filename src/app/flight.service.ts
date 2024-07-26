import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './models/flight';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl + "/flights");
  }
} 
