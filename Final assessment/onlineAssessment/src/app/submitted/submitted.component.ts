import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsDataService } from '../questions-data.service';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {
  s;
  attempted=[];
  displayanswered=[];
  displaycorrect=[];
  constructor(private routedata:ActivatedRoute,private readonly QData:QuestionsDataService,private router: Router) { }

  ngOnInit() {
    this.QData.getData().subscribe((res:any)=>{
      let temp=res.results;
      for(let i=0;i<5;i++){
          this.attempted.push(temp[i]);
      }
      
    });

  }
getScore(){
  //console.log(this.attempted);
   let sc=JSON.parse(localStorage.getItem('Score'));
  this.s=sc.id
  this.displayanswered=JSON.parse(localStorage.getItem('Ans'));
      //console.log(localStorageansItem);
    this.displaycorrect=JSON.parse(localStorage.getItem('Crc'));
      //console.log(localStoragecrcItem);
      this.router.navigateByUrl('submitted');
}
}
