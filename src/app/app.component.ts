import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public router: Router){}
  userId: any;
  login() {
    console.log(this.userId);
    console.log(this.password); 
    // this.router.navigateByUrl('/home');
  }
  title = 'NodeUI';
  password: any;
}
