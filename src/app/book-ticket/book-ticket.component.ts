import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/flight.service';
import { Flight } from 'src/app/models/flight';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  flight: Flight | undefined;
  customer = {
    name: '',
    id: '',
    phoneNumber: '',
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flight = this.flightService.getSelectedFlight();
  }

/*   onSubmit(): void {
    if (this.flight){
      this.flightService.bookTicket(this.flight.id, this.customer).subscribe(response => {
        console.log('Your Purchase Was Successfull.', response)
      });
    }
  } */

/*   onSubmit() {
    if (this.flight) {
      const ticket: Ticket = {
        flightId: this.flight.id,
        customerName: this.customer.name,
        customerId: this.customer.id,
        customerPhone: this.customer.phoneNumber,
        customerEmail: this.customer.email
      };
      this.flightService.bookTicket(ticket).subscribe(() => {
        console.log('Ticket booked:', ticket);
        this.router.navigate(['/booked-tickets']);
      });
    }
  } */
  
  generateRandomId(): number {
    return Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
  }
  
  onSubmit(): void {
    if (this.flight) {
      const ticket: Ticket = {
        id: this.generateRandomId(),
        flightId: this.flight.id,
        customerName: this.customer.name,
        customerId: this.customer.id,
        customerPhone: this.customer.phoneNumber,
        customerEmail: this.customer.email,
        departure: this.flight.departure,
        landing: this.flight.landing,
        flightDate: this.flight.flightDate,
        departureTime: this.flight.departureTime,
        landingTime: this.flight.landingTime
      };
      this.flightService.bookTicket(ticket).subscribe(() => {
        console.log('Ticket booked:', ticket);
        this.router.navigate(['/booked-tickets']);
      });
    }
  }


}
