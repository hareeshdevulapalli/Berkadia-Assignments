import { Component, OnInit } from '@angular/core';
import { noSideEffects } from '@angular/core/src/util';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertstudent',
  templateUrl: './insertstudent.component.html',
  styleUrls: ['./insertstudent.component.scss']
})
export class InsertstudentComponent implements OnInit {
  sid;
  sname;
  sage;
  enrolledcourse;
  department;
  constructor(private readonly studentService:DataService,private router: Router) { }

  ngOnInit() {
  }
  insert(){
    this.studentService.insertStudentData(this.sid,this.sname,this.sage,this.enrolledcourse,this.department);
  }
}
