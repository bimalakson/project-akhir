import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionAddComponent } from './division-add/division-add.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"division",component:DivisionComponent},
  {path:"division-add",component:DivisionAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }