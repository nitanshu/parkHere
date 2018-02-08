import { Component, OnInit } from '@angular/core';

import { City } from '../../models/city';
import { CityService } from '../../services/city.service';
import { CITIES } from '../../mocks/mock-cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService) { }
  cities: City[];

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cityService.addCity({ name } as City)
      .subscribe(city => {
        this.cities.push(city);
      });
  }
}
