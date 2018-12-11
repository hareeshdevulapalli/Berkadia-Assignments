import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  studentdata():any{
    return [
      {"name":"a","dept":"cse","age":19,"percen":76},
      {"name":"b","dept":"ece","age":21,"percen":58},
      {"name":"c","dept":"it","age":18,"percen":85},
      {"name":"d","dept":"mech","age":21,"percen":90},
      {"name":"e","dept":"eee","age":22,"percen":91},
      {"name":"f","dept":"civ","age":19,"percen":54},
      {"name":"g","dept":"cse","age":20,"percen":67},
      {"name":"h","dept":"cse","age":19,"percen":71},
      {"name":"i","dept":"ece","age":23,"percen":60}
    ];
  }
}
