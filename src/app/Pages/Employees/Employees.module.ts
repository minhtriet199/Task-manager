import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EmployeesList } from './List/Employees.list';
import { TemplateModule } from 'src/app/Core/Component/Template.module';
import { EmployeeRoutingModule } from './Employee-routing.module';

@NgModule({
    imports: [
        TemplateModule,
        EmployeeRoutingModule
    ],
})
export class EmployeesModule {
}