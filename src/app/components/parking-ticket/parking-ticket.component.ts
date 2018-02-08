import { Component, OnInit, Input } from '@angular/core';

import { ParkingSlot } from '../../models/parking-slot';
import { ParkingTicket } from '../../models/parking-ticket';

@Component({
  selector: 'app-parking-ticket',
  templateUrl: './parking-ticket.component.html',
  styleUrls: ['./parking-ticket.component.css']
})

export class ParkingTicketComponent implements OnInit {
  @Input() parkingSlot: ParkingSlot;

  constructor() { }

  ngOnInit() {
  }

}
