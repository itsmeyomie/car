import { Component } from '@angular/core';
import { Vehicle } from '../Vehicle';
import { cars } from '../vehicles';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: Vehicle[] = cars;
}






