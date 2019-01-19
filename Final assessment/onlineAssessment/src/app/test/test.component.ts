import { Component, OnInit } from '@angular/core';
import { QuestionsDataService } from '../questions-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  score={
    "id":0
  };
  questions:any;
  answeredOption=[];
  correctOption=[];
  public id:number;
  options:any=[];
  constructor(private routedata:ActivatedRoute,private readonly QData:QuestionsDataService,private router: Router) { }

  ngOnInit() {

    this.QData.getData().subscribe((res:any)=>{
      this.routedata.paramMap
    .subscribe(params=>
   {
        this.id=+params.get("id");
   });
      //this.questions=__.sample(res.results,10);
      this.questions=res.results;
      
      //this.questions=temp[Math.floor(Math.random()*temp.length)];
      console.log(this.questions);
    });

  }
  nextquestion(answered,correct){
    this.routedata.paramMap
    .subscribe(params=>
    {
        this.id=+params.get("id");
    });
    let ans={
        "no":this.id,
        "ans":answered
    }
    let crc={
      "no":this.id,
      "ans":correct
  }
    if(this.id<5){
      if(answered==correct){
          this.score.id=this.score.id+1;
      }
      this.answeredOption.push(ans);
      this.correctOption.push(crc);
      console.log(this.answeredOption);
      console.log(this.correctOption);
    
      
    this.id=this.id+1;
    let url='test/'+this.id;
    this.router.navigateByUrl(url);
    }
    else
    {
      localStorage.setItem('Score',JSON.stringify(this.score));
      localStorage.setItem('Ans',JSON.stringify(this.answeredOption));
      localStorage.setItem('Crc',JSON.stringify(this.correctOption));
      this.router.navigateByUrl('submitted');
    }
  }  
}
