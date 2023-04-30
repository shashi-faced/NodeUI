import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_LIST } from "./config/baseUrls";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:4000'; // Update the base URL to point to your Node.js server

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const apiUrl = URL_LIST.LOGIN.userLogin;
    return this.http.get<any>(`${this.baseUrl}${apiUrl}`);
  }

  postData(data: any): Observable<any> {
    const apiUrl = URL_LIST.LOGIN.userLogin;
    return this.http.post<any>(`${this.baseUrl}${apiUrl}`, data);
  }
}