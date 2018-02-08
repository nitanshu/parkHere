import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParkingPlaceComponent } from './components/parking-place/parking-place.component';
import { ParkingSlotComponent } from './components/parking-slot/parking-slot.component';
import { ParkingTicketComponent } from './components/parking-ticket/parking-ticket.component';

import { CityService } from './services/city.service';
import { ParkingPlaceService } from './services/parking-place.service';
import { ParkingSlotService } from './services/parking-slot.service';
import { ParkingTicketService } from './services/parking-ticket.service';



@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DashboardComponent,
    ParkingPlaceComponent,
    ParkingSlotComponent,
    ParkingTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CityService, ParkingPlaceService, ParkingSlotService, ParkingTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
