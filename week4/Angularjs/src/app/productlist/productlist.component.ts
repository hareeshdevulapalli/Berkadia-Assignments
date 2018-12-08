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
  @Output() add: EventEmitter<any>=new EventEmitter();
  @Output() remove: EventEmitter<any>=new EventEmitter();
  
  public addtotalproducts(){
    let total:any={
      tc:this.plprice
    };
    this.add.emit(total);
  }
  public removetotalproducts(){
    let total:any={
      tc:this.plprice
    };
    this.remove.emit(total);
  }

  ngOnInit() {
  }

}
