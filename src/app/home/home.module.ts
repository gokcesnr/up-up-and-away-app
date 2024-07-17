import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],

})
export class HomeModule { }
