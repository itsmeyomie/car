import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
 cars:Vehicle[] = [
  { name:"RAv 4",id:1,model:"Toyota",type:"suv",yom:"2009"},
  {name:"RS 8",id:2,model:"Audi",type:"coup",yom:"2011"},
  {name:"V40",id:3,model:"Volvo",type:"sedan",yom:"2015"},
  {name:"X5",id:4,model:"BMW",type:"suv",yom:"2017"}
 ]


shows:any
 


show(item:any){
  this.shows=item;

  }


  

}






