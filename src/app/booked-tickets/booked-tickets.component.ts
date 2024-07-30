import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-booked-tickets',
  templateUrl: './booked-tickets.component.html',
  styleUrls: ['./booked-tickets.component.css']
})
export class BookedTicketsComponent implements OnInit {
  bookedTickets: any [] = [];

  constructor (private flightService: FlightService){}

  ngOnInit(): void {
    this.getBookedTickets();
  }

  getBookedTickets(): void{
    this.flightService.getBookedTickets().subscribe(tickets => this.bookedTickets = tickets);
  }
}
