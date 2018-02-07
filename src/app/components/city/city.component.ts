import { Component, OnInit } from '@angular/core';

import { City } from '../../models/city';
import { CITIES } from '../../mocks/mock-cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }
  cities: City[];

  ngOnInit() {
    this.cities = this.getCities();
  }

  getCities(): City[] {
    return CITIES;
  }
}
