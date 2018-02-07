import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParkingPlaceComponent } from './components/parking-place/parking-place.component';
import { ParkingSlotComponent } from './components/parking-slot/parking-slot.component';


@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DashboardComponent,
    ParkingPlaceComponent,
    ParkingSlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
