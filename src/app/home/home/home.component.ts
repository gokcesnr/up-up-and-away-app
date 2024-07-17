import { Component, OnInit} from '@angular/core';
import { FlightService } from 'src/app/flight.service';
import { Flight } from 'src/app/models/flight';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  searchForm: FormGroup;
  flights: Flight[] = [];
  errorMessage: string | null = null;

  constructor(private flightService: FlightService){
    this.searchForm = new FormGroup({
      landing: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSearch(){
    if(this.searchForm.valid){
      const{ landing, date } = this.searchForm.value;
      this.flightService.filteredFlights(landing, date).subscribe(
        (flights: Flight[]) => {
          this.flights = flights;
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error fetching flights', error);
          this.errorMessage = 'Error fetching flights';
        }
      );
    }
    else{
      console.log('No Available Flights.');
      this.errorMessage = 'No Available Flights.';
    }
  }

}
