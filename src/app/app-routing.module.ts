import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './car/car.component';


const routes: Routes = [
 
  { path: 'car',loadChildren:()=>import('./car/car.module').then(carModule=>carModule.CarModule)},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
