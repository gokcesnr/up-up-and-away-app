import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/flight.service';
import { Flight } from 'src/app/models/flight';
import { Ticket } from '../models/ticket';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private router: Router,
    private snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {
    this.flight = this.flightService.getSelectedFlight();
  }
  
  generateRandomId(): number {
    return Math.floor(Math.random() * 1000000); // Generate a random ID
  }
  
  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onSubmit(): void {
    if (this.flight && this.customer.name && this.customer.id && this.customer.phoneNumber && this.customer.email) {
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
        this.showSnackBar('Ticket booked successfully!');
      });
  
    } else {
      this.showSnackBar('Please fill out all required fields.');
    }
  }

}
