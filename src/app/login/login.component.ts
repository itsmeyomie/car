import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  show: boolean = false;
  login: boolean = true;

  @Output() isLoggedIn = new EventEmitter<boolean>();

  constructor(private router: Router) {}
   


  
  
  submit() {
    
    this.checkPass();
 
    this.isLoggedIn.emit();
 

  }
  

  checkPass() {
    if (this.password === "admin" && this.username==="yomie") {
      this.router.navigate(['cars'])
     
    }
   
  }

}


