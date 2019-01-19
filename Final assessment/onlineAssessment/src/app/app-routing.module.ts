import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SubmittedComponent } from './submitted/submitted.component';

const routes: Routes = [
  {
    path:'test/:id',
    component:TestComponent
  },
  {
    path:'submitted',
    component:SubmittedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
