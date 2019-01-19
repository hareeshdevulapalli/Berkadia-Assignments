import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsDataService {
  api='https://api.myjson.com/bins/gij7c';
  constructor(private readonly http:HttpClient) { }
  getData(){
    return this.http.get(this.api);
  }
}
