import { Component, EventEmitter, Output } from '@angular/core';

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

  
  submit() {
    
    this.checkPass();
    this.clear();
    this.isLoggedIn.emit();
 

  }
  clear() {
    this.username = "";
    this.password = "";
    
  }

  checkPass() {
    if (this.password === "admin") {
      this.show = true;
    }
    
  }
  

}
