import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ParkingPlace } from '../../models/parking-place';
import { PARKING_PLACES } from '../../mocks/mock-parking-places';

@Component({
  selector: 'app-parking-place',
  templateUrl: './parking-place.component.html',
  styleUrls: ['./parking-place.component.css']
})
export class ParkingPlaceComponent implements OnInit {
  parkingPlaces: ParkingPlace[];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.parkingPlaces = this.getparkingPlacesofCity(id);
    console.log(this.parkingPlaces);
  }

  getparkingPlacesofCity(id: number): ParkingPlace[] {
    return PARKING_PLACES.filter(parkingPlaces => parkingPlaces.city_id === id);
  }
}
