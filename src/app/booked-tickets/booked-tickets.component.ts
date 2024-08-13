import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-booked-tickets',
  templateUrl: './booked-tickets.component.html',
  styleUrls: ['./booked-tickets.component.css']
})
export class BookedTicketsComponent implements OnInit {

  bookedTickets: Ticket [] = [];

  constructor (private flightService: FlightService){}

  ngOnInit(): void {
    this.bookedTickets = this.flightService.getBookedTickets();
  }

}
