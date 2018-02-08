import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityComponent } from './components/city/city.component';
import { ParkingPlaceComponent } from './components/parking-place/parking-place.component';
import { ParkingSlotComponent } from './components/parking-slot/parking-slot.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CityComponent },
  { path: 'cities/:id/parking_places', component: ParkingPlaceComponent },
  { path: 'parking_place/:id', component: ParkingSlotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
