import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userId: any;
  login() {
    console.log(this.userId);
    console.log(this.password); 
    // this.router.navigateByUrl('/home');
  }
  title = 'NodeUI';
  password: any;

}
