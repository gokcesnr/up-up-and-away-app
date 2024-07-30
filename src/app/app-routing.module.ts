import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BookedTicketsComponent } from './booked-tickets/booked-tickets.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'flights', component: FlightListComponent},
  {path:'book-ticket', component:BookTicketComponent},
  {path: 'booked-tickets', component:BookedTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
