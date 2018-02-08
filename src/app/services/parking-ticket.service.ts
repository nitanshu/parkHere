import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ParkingTicket } from '../models/parking-ticket';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()

export class ParkingTicketService {
  private parkingTicketUrl = 'http://localhost:3000/parking_tickets';
  constructor(
    private http: HttpClient
  ) { }
 bookTicket(parkingTicket: ParkingTicket): Observable<ParkingTicket> {
   console.log('parking ticket object', parkingTicket);
   return this.http.post<ParkingTicket>(this.parkingTicketUrl, parkingTicket, httpOptions);
 }
}
