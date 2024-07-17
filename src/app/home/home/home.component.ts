import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  flightSearchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.flightSearchForm = this.fb.group({
      city: [''],
      date: ['']
    });
  }  

ngOnInit(): void {
  }

  onSubmit(): void {
    const { city, date } = this.flightSearchForm.value;
    this.router.navigate(['/flights'], { queryParams: { city, date } });
  }
}
