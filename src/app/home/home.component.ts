import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userId: any;
  title = 'NodeUI';
  password: any;


  constructor(public router : Router){}

  login() {
    console.log(this.userId);
    console.log(this.password); 
    this.router.navigateByUrl('/dashboard');
  }
}
