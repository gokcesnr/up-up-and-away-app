import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/flight.service';
import { Flight } from 'src/app/models/flight';

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
  }

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flight = this.flightService.getSelectedFlight();
  }

  onSubmit(): void {
    if (this.flight){
      this.flightService.bookTicket(this.flight.id, this.customer).subscribe(response => {
        console.log('Your Purchase Was Successfull.', response)
      });
    }
  }
}
