import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  api='http://api.mathjs.org/v4';
  constructor(private readonly http:HttpClient) {
   }
   getResult(expr:string,prec:number){
    return this.http.get(`${this.api}/?expr=${expr}&precision=${prec}`);
   }
}
