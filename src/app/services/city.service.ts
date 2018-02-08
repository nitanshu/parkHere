import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()

export class CityService {
  private cityUrl = 'http://localhost:3000/cities';
  constructor(private http: HttpClient) { }

}
