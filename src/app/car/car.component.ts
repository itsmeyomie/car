import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../Vehicle';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { cars } from '../vehicles'; 

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 @Input()
  vehicles!: Vehicle;

  
  cars:Vehicle[]=cars;
  
  carz: any      //i had to put any here
 

  carId:any;      //i had to put any here
 



  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
   this.carId=this.route.snapshot.paramMap.get('id');

   
   
   this.carz=this.cars.find(x =>x.id ==this.carId)

   
   
   
  }



 
  }
  

 



