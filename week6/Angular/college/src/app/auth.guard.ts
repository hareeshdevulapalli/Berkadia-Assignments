import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AttendanceService } from './attendance/attendance.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logged:AttendanceService,private router:Router ){}
  canActivate():boolean {
    if(this.logged.logged() == "true"){
      console.log(this.logged.logged());
      return true;
    }
    else{
      this.router.navigate(['login']);
      alert("To check attendance:Please Login!");
      return false;
    }
  }
}
