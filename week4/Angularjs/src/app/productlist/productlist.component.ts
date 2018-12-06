import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  constructor() { }

  @Input('name') plname:String;
  @Input('price') plprice:number;
  @Output() totalproducts: EventEmitter<any>=new EventEmitter();
  
  public sendtotalproducts(){
    let total:any={
      tc:this.plprice
    };
    this.totalproducts.emit(total);
  }

  ngOnInit() {
  }

}
