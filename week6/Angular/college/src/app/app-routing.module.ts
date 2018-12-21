import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { LoginComponent } from './login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'departments',
        component: DepartmentsComponent,
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'attendance',
        component:AttendanceComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'**',
        component:PagenotfoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponent=[LoginComponent,DepartmentsComponent,HomeComponent,AboutComponent,PagenotfoundComponent,AttendanceComponent]
