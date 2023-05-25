import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './car/car.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cars',loadChildren:()=>import('./car/car.module').then(carModule=>carModule.CarModule)},
  {path:'',redirectTo:'cars',pathMatch:'full'},
  { path: '**', component:PageNotFoundComponent },
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
