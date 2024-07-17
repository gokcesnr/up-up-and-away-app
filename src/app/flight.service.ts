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

    filteredFlights(landing: string, flightDate: Date): Observable<Flight[]>{
      let params = new HttpParams();
      params = params.append('landing', landing.toLowerCase());
      params = params.append('flightDate', flightDate.toISOString());

      return this.http.get<Flight[]>(this.apiUrl + "/flightsearch", {params});
    }
}
