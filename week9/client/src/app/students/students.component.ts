import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students:any;
  constructor(private readonly studentService:DataService,private router: Router) { }

  ngOnInit() {
    this.studentService.getStudentsData().subscribe((res:any)=>{
      this.students=res.data;
      console.log(this.students);
    });
  }
  
}
