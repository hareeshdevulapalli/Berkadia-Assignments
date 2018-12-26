import { Component, OnInit } from '@angular/core';
import { AqService } from '../aq.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  country:string;
  city:string;
  public a;
  public aquality;
  constructor(private airq:AqService) { }


  ngOnInit() {
    this.a=this.airq.getCoutries().subscribe((res:any)=>{
      this.aquality=res.results;
      console.log(this.aquality);
  });
}

}
