import { Component, OnInit } from '@angular/core';
import { AqService } from '../aq.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public cityname;
  public c;
  ld;
  cityairq;
  locationd;
  constructor(private readonly cityservice:AqService,private router: Router) { }

  ngOnInit() {}
  citydetails():any{
    this.c=this.cityservice.getCityDetails(this.cityname).subscribe((res:any)=>{
      this.cityairq=res.results;
  });
  }
  getlocationdetails(d):any{
    this.ld=this.cityservice.getLocationd(d).subscribe((res:any)=>{
    this.locationd=res.results[0];
    console.log(this.locationd);
  });
  }

}
