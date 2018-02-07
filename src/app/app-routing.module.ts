import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityComponent } from './components/city/city.component';
import { ParkingPlaceComponent } from './components/parking-place/parking-place.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CityComponent },
  { path: 'cities', component: CityComponent },
  { path: 'city/:id/parking_places', component: ParkingPlaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
