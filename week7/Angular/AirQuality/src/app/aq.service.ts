import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AqService {
  countryurl;
  cityurl;
  locationurl;
  constructor(private readonly http:HttpClient) {
    this.countryurl='https://api.openaq.org/v1/countries?sort=asc';
    this.cityurl='https://api.openaq.org/v1/latest?';
    this.locationurl='https://api.openaq.org/v1/latest?location='
   }
   getCoutries(){
     return this.http.get(this.countryurl);
   }
   getCityDetails(city){
     return this.http.get(this.cityurl+'city='+city);
   }
   getLocationd(location){
     return this.http.get(this.locationurl+location);
   }
}
