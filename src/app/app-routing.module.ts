import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 
  { path: 'cars', component: CarsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
