import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';
import { InsertstudentComponent } from './insertstudent/insertstudent.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'students',
    component:StudentsComponent
  },
  {
    path:'faculty',
    component:FacultyComponent
  },
  {
    path:'insertStudent',
    component:InsertstudentComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponent=[AboutComponent,StudentsComponent,FacultyComponent,InsertstudentComponent,AboutComponent];
