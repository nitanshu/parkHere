import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ParkingSlot } from '../models/parking-slot';
import { HttpClientModule } from '@angular/common/http/src/module';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()

export class ParkingSlotService {
constructor(
    private http: HttpClient
) {}

private parkingSlotUrl = 'http://localhost:3000/parking_slots';

getParkingSlots(): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(this.parkingSlotUrl);
}
}
