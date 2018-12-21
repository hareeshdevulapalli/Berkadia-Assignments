import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logged:string;
  public name:string;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('logged')=="true")
      this.logged="Logout";
    else
      this.logged="Login";
  }
 
 
  logging(){
    if(this.logged=="Login"){
      this.logged="Logout";
      localStorage.setItem('logged','true');
    }
    else{
      this.logged="Login";
      localStorage.setItem('logged','false');
    }
  }
}
