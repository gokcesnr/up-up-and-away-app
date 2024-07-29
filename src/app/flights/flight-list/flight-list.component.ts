import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  departures: string[] = [];
  departureSelected: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.getFlights();
  }
  
  getFlights(): void {
    this.flightService.getFlights().subscribe((flights: Flight[]) => {
      this.flights = flights;
      this.filteredFlights = flights;  // Show all flights oninit
      console.log('Flights:', this.flights);
    });
  }

  onDepartureSelected(departure: string): void {
    this.departureSelected = departure;
    this.filteredFlights = this.departureSelected 
      ? this.flights.filter(flight => flight.departure === this.departureSelected)
      : this.flights;
  }
}
