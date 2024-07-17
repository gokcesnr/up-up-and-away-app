import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/flight.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [];

 // filteredFlights: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private flightService: FlightService) {}

  ngOnInit(): void {
/*     this.route.queryParams.subscribe(params => {
      const city = params['city'];
      const date = params['date'];
      this.fetchFlights(city, date); 
    }); */
    this.getFlights();
  }
  getFlights(): void{
    this.flightService.getFlights()
    .subscribe((flights: Flight[]) => {this.flights = flights;
    console.log('Flights:', this.flights);
    }
  );
  }

 /*  fetchFlights(city: string, date: string): void {
    this.http.get<any[]>(this.apiUrl).subscribe(flights => {
      this.filteredFlights = flights.filter(flight => 
        flight.city === city && flight.date === date
      );
    });
  } */

}
