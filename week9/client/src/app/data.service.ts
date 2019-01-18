import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  localhost='http://localhost:7777';
  studentData;
  facultyData;
  constructor(private readonly http:HttpClient) {
    this.studentData=`${this.localhost}/students`;
    this.facultyData=`${this.localhost}/faculty`;
   }
  getStudentsData(){
    return this.http.get(this.studentData);
  }
  getFacultyData(){
    return this.http.get(this.facultyData);
  }
  insertStudentData(id,name,age,ecourse,dept){
    let body = new URLSearchParams();
    body.set('id', id);
    body.set('name',name );
    body.set('age',age );
    body.set('course',ecourse );
    body.set('dept',dept );

    
    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    this.http
        .post(this.studentData, body.toString(), options)
        .subscribe(response => {
            console.log(response);
        });
  }
}
