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
  public cities;
  locations;
  locationname;
  citylocationdetails;
  locationdetails;
  constructor(private readonly cityservice:AqService,private router: Router) { }

  ngOnInit() {}
  citydetails():any{
    this.cities=this.cityservice.getCityDetails(this.cityname).subscribe((res:any)=>{
    this.citylocationdetails=res.results;
  });
  }
  getlocationdetails(d):any{
    this.locationname=d;
    this.locations=this.cityservice.getLocationd(d).subscribe((res:any)=>{
    this.locationdetails=res.results[0];
    console.log(this.locationdetails);
  });
  }

}
