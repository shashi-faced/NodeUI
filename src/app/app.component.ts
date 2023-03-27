import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userId: any;
  login() {
    console.log(this.userId);
    console.log(this.password); 
  }
  title = 'NodeUI';
  password: any;
}
