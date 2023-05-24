import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from '../car-routing/car-routing.module';
import { CarComponent } from './car.component';
import { CarsComponent } from '../cars/cars.component';



@NgModule({
  declarations: [
    CarComponent,
   
  ],
  imports: [
    CommonModule,
    CarRoutingModule

  ]
})
export class CarModule { }
