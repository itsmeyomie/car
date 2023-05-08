import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car';
 

  isLoggedIn = false;

  onLoginSuccess() {
    // Set the isLoggedIn property to true to show the home component.
    this.isLoggedIn = true;
  }



}
