import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  facul:any;
  f;
  constructor(private readonly studentService:DataService,private router: Router) { }

  ngOnInit() {
    this.f=this.studentService.getFacultyData().subscribe((res:any)=>{
      this.facul=res.data;
      console.log(this.facul);
    });
  }
}
