import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/flight.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  destinations: string[] = [];
  destinationSelected: string | null = null;
  
  first: number = 0;
  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
}

/*   totalRecords: number = 105;*/

/*   options = [
    {label: 5, value: 5},
    {label: 10, value: 10},
    {label: 20, value: 20},
    {label: 105, value: 105},

  ]; */

/*   onPageChange2(event: PageEvent){
    this.first1 = event.first;
    this.rows1 = event.rows;
  } */

 /*  data: any[];
  totalRecords: number =100; */

  constructor(private route: ActivatedRoute, private http: HttpClient, private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.getFlights();
  }
  
  getFlights(): void {
    this.flightService.getFlights().subscribe((flights: Flight[]) => {
      this.flights = flights;
      this.filteredFlights = flights; 
    });
  }

  onDestinationSelected(destination: string): void {
    this.destinationSelected = destination;
    this.filteredFlights = this.destinationSelected 
      ? this.flights.filter(flight => flight.landing === this.destinationSelected)
      : this.flights;
  }

  buyTicket(flight: Flight): void{
    this.flightService.setSelectedFlight(flight);
    this.router.navigate(['/book-ticket']);
  }


}
