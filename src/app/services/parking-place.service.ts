import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ParkingPlace } from '../models/parking-place';
import { HttpClientModule } from '@angular/common/http/src/module';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()

export class ParkingPlaceService {
    constructor(
        private http: HttpClient
    ) { }

    private parkingPlaceUrl = 'http://localhost:3000/cities';

    getParkingPlaces(id: number): Observable<ParkingPlace[]> {
        const url = `${this.parkingPlaceUrl}/${id}/parking_places`;
        return this.http.get<ParkingPlace[]>(url);
    }
}
