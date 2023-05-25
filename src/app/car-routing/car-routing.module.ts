import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CarsComponent } from '../cars/cars.component';
import { CarComponent } from '../car/car.component';


const routes:Routes=[{
path:'',
component:CarsComponent
},
{
  path:':id',
  component:CarComponent
}

]



@NgModule({
  declarations: [],
  imports: [
   
    [RouterModule.forChild(routes)],   
  ],
  exports: [RouterModule]
 
})
export class CarRoutingModule { }
