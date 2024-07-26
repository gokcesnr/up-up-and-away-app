import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/flight.service';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  departures: string[] = [];
  departureSelected: string[] = [];


  constructor(private route: ActivatedRoute, private http: HttpClient, private flightService: FlightService) {}

  ngOnInit(): void {
    this.getFlights();
  }
  
  getFlights(): void{
    this.flightService.getFlights()
    .subscribe((flights: Flight[]) => {this.flights = flights;
    console.log('Flights:', this.flights);
    }
  );
  }

}
