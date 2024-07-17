import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'flights', component: FlightListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
