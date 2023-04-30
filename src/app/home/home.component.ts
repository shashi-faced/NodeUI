import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
// import { Response, Headers, RequestOptions, Http, URLSearchParams } from "@angular/http";
// import { Observable, Subject } from "rxjs";
// import { LocalStorageService } from 'ngx-webstorage';
// import { hulSpinner } from './spinner';
// import 'rxjs/add/operator/catch';
// import  'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
import { catchError, map, switchMap, isEmpty } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userId: any;
  password: any;
  flag: any;
  userLoggedIN: any;

  constructor(
    public router: Router, 
    private dataService : DataService,
    ) 
    {}

  login() {
    console.log(this.userId);
    console.log(this.password);
    const obj = {
      "name" : this.userId,
      "password": this.password
    };
    this.dataService.postData(obj).subscribe((data) => {
      if(data){
        console.log(data);
        this.userLoggedIN = true;
        if (this.userLoggedIN) {
          this.router.navigateByUrl('/dashboard');
          this.setUserSession(data);
        }
      }
    });
    
  }
  setUserSession(userData: any) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
