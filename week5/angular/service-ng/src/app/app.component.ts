import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public students=[];scse=[];sece=[];smech=[];sciv=[];seee=[];
  public pc=0;visible=true;
  
  constructor(public s:StudentService){}
  ngOnInit(){
      this.students=this.s.studentdata();
      this.students.forEach(element => {
          if(element.dept==="cse"){
            this.scse.push(element);
          }
      });
      this.students.forEach(element => {
        if(element.dept==="ece"){
          this.sece.push(element);
        }
      });
      this.students.forEach(element => {
        if(element.dept==="mech"){
        this.smech.push(element);
      }
      });
      this.students.forEach(element => {
        if(element.dept==="civ"){
          this.sciv.push(element);
      }
      });
      this.students.forEach(element => {
          if(element.dept==="eee"){
              this.seee.push(element);
          }
      });
     
  }
  public percentage(pr:number):any{
        this.pc=pr;
  }
}
