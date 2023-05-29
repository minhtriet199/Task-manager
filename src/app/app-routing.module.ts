import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './Core/Component/Template.module';
import { AuthRoutingModule } from './Pages/Auth/Auth-route.module';
import { EmployeeRoutingModule } from './Pages/Employees/Employee-routing.module';
import { DashBoardComponent } from './Pages/DashBoard/DashBoard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Pages/DashBoard/DashBoard.module').then(m => m.DashBoardModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./Pages/Employees/Employees.module').then(m => m.EmployeesModule),
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./Pages/Auth/Auth.module').then(m => m.AuthModule) 
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TemplateModule, 
    AuthRoutingModule,
    EmployeeRoutingModule,
  ],
  exports: [
    RouterModule, 
  ],
})
export class AppRoutingModule { }
