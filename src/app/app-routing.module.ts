import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './Core/Component/Template.module';
import { AuthRoutingModule } from './Pages/Auth/Auth-route.module';
import { EmployeeRoutingModule } from './Pages/Employees/Employee-routing.module';
import { AuthGuard } from './Core/Auth/AuthGuard';

const routes: Routes = [
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
