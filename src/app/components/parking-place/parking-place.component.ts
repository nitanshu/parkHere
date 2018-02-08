import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ParkingPlaceService } from '../../services/parking-place.service';
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
    private location: Location,
    private parkingPlaceService: ParkingPlaceService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getparkingPlacesofCity(id);
  }

  getparkingPlacesofCity(id): void {
   this.parkingPlaceService.getParkingPlaces(id).subscribe(
     parkingPlaces => this.parkingPlaces = parkingPlaces.filter(p => p.city_id === id));
  }
}
