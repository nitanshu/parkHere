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
  parkingPlace: ParkingPlace;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
   this.parkingPlace = this.getparkingPlaceofCity(id);
   console.log(this.parkingPlace);
  }

  getparkingPlaceofCity(id: number): ParkingPlace {
  return PARKING_PLACES.find(parkingPlace => parkingPlace.city_id === id);
  }
}
