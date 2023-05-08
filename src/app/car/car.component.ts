import { Component, Input } from '@angular/core';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input()
  car!: Vehicle;

  shows !:Vehicle 



  show(item:Vehicle) {
    this.shows = item;

  }
}
