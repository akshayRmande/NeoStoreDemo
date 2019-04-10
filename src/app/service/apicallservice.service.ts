import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallserviceService {

  constructor(private http: HttpClient) { }
  


  getProducts(url) {
    return this.http.get(url);
  }
}