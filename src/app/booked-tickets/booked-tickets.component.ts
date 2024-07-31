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

/*   ngOnInit(): void {
    this.getBookedTickets();
  }

  getBookedTickets(): void{
    this.flightService.getBookedTickets().subscribe(tickets => this.bookedTickets = tickets);
  } */

  ngOnInit(): void {
    this.loadBookedTickets();
  }

  loadBookedTickets(): void {
    this.flightService.getBookedTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.bookedTickets = tickets;
      },
      error: (error) => {
        console.error('Error fetching booked tickets:', error);
      }
    });
  }

}
