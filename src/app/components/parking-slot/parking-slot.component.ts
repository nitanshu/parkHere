import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ParkingSlot } from '../../models/parking-slot';
import { PARKING_SLOTS } from '../../mocks/mock-parking-slots';
import { PARKING_PLACES } from '../../mocks/mock-parking-places';


@Component({
  selector: 'app-parking-slot',
  templateUrl: './parking-slot.component.html',
  styleUrls: ['./parking-slot.component.css']
})
export class ParkingSlotComponent implements OnInit {
  parkingSlots:  ParkingSlot[];
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.parkingSlots = this.getParinkSlotsofParkingPlace(id);
    console.log(this.parkingSlots);
  }

  getParinkSlotsofParkingPlace(id: number): ParkingSlot[] {
   return PARKING_SLOTS.filter(parkingSlots => parkingSlots.parking_place_id === id);
  }

}
