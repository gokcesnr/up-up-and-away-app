import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';
import { Flight } from 'src/app/models/flight';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  allFlights: Flight[] = [];
  filteredFlights: Flight[] = [];
  errorMessage: string | null = null;

  constructor(private flightService: FlightService, private router: Router) {
    this.searchForm = new FormGroup({
      departure: new FormControl('', Validators.required),
      flightDate: new FormControl('', Validators.required), 
    });
  }

  ngOnInit(): void { }

  onSearch() {
    if (this.searchForm.valid) {
      const { departure, flightDate } = this.searchForm.value;

      this.flightService.getFlights().subscribe({
        next: (flights: Flight[]) => {
          this.allFlights = flights;
          // Filtering logic
          this.filteredFlights = this.allFlights.filter(flight =>
            flight.departure.toLowerCase().includes(departure.toLowerCase()) &&
            (flightDate ? new Date(flight.flightDate).toDateString() === new Date(flightDate).toDateString() : true)
      );
      this.errorMessage = null;
    },
    error: (error: any) => {
      console.error('Error fetching flights', error);
      this.errorMessage = 'Error fetching flights';
    }
  });
    } else {
      console.log('Please fill in the search criteria');
      this.errorMessage = 'Please fill in the search criteria';
    }
  }

  buyTicket(flight: Flight): void{
    this.flightService.setSelectedFlight(flight);
    this.router.navigate(['/book-ticket']);
  }

}
