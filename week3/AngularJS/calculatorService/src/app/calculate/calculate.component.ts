import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {
  public c:any;
  public value;
  public expression:string;
  public precision:number;
  constructor(private cal:CalculatorService,private router:Router) { }

  ngOnInit() {
  }
  result(){
    this.c=this.cal.getResult(this.expression,this.precision).subscribe((res)=>{
      console.log(res);
      this.value=res;
    })
  }
}
