import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { EmployeesList } from './List/Employees.list';
import { TemplateModule } from 'src/app/Core/Component/Template.module';
import { AuthGuard } from 'src/app/Core/Auth/AuthGuard';

const routes: Route[] = [
  {
    path: 'employee',
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: EmployeesList },
    ],
  }
];

@NgModule({
  declarations:[
    EmployeesList
  ],
  imports: [
    RouterModule.forChild(routes),
    TemplateModule,
  ],
  exports: [
    RouterModule, 
  ],
})
export class EmployeeRoutingModule { }
