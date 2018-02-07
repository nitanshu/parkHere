import { Component, OnInit } from '@angular/core';
import { CITIES } from '../../mocks/mock-cities';
import { City } from '../../models/city';

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
