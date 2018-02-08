import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ParkingSlot } from '../../models/parking-slot';
import { ParkingSlotService } from '../../services/parking-slot.service';


@Component({
  selector: 'app-parking-slot',
  templateUrl: './parking-slot.component.html',
  styleUrls: ['./parking-slot.component.css']
})
export class ParkingSlotComponent implements OnInit {
  parkingSlots: ParkingSlot[];
  selectedParkingSlot: ParkingSlot;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private parkingSlotService: ParkingSlotService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getParinkSlotsofParkingPlace(id);
  }

  getParinkSlotsofParkingPlace(id: number) {
    this.parkingSlotService.getParkingSlots().
      subscribe(parkingSlot => (
        this.parkingSlots = (parkingSlot.filter(p => p.parking_place_id === id))
      ));
  }

  openParkingTicketForm(parkingSlot: ParkingSlot) {
    console.log(parkingSlot, 'called');
    this.selectedParkingSlot = parkingSlot;
  }

  goBack(): void {
    this.location.back();
  }

}
