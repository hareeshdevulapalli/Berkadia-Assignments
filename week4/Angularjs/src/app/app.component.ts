import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public plist : any =[
    {pname : 'a',price : 23},
    {pname : 'b',price : 33},
    {pname : 'c',price : 43},
    {pname : 'd',price : 53},
    {pname : 'e',price : 63},
    {pname : 'f',price : 73},
  ];
  public k:any={
    tp:0,tc:0
  };
  public gettotalproducts(data:any) :void{
      this.k.tp=this.k.tp+1;
      this.k.tc=this.k.tc+data.tc;
  }
  
}
