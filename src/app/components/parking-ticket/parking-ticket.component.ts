import { Component, OnInit, Input } from '@angular/core';

import { ParkingSlot } from '../../models/parking-slot';
import { ParkingTicket } from '../../models/parking-ticket';

import { ParkingTicketService } from '../../services/parking-ticket.service';

@Component({
  selector: 'app-parking-ticket',
  templateUrl: './parking-ticket.component.html',
  styleUrls: ['./parking-ticket.component.css']
})

export class ParkingTicketComponent implements OnInit {
  @Input() parkingSlot: ParkingSlot;
  parkingTickets: ParkingTicket[];

  constructor(private parkingTicketService: ParkingTicketService) { }

  ngOnInit() {
    this.getParkingTickets();
  }

  getParkingTickets() {
    this.parkingTicketService.getAllParkingTickets().
    subscribe(parkingTickets => this.parkingTickets = parkingTickets);
  }

  add(parkingSlot: string, parking_slot_id: number, in_time: string, out_time: string, ticket_price: number): void {
    in_time = in_time.trim();
    out_time = out_time.trim();
    if (!in_time) { return; }
    this.parkingTicketService.bookTicket({ parking_slot_id, in_time, out_time, ticket_price } as ParkingTicket)
      .subscribe(parkingTicket => this.parkingTickets);
  }
}



