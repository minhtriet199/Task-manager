import { NgModule } from '@angular/core';
import { TemplateModule } from 'src/app/Core/Component/Template.module';
import { DashBoardComponent } from './DashBoard';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/Core/Auth/AuthGuard';
const routes: Route[] = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: DashBoardComponent ,
    }
  ];
  
@NgModule({
    declarations:[
        DashBoardComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TemplateModule,
        CommonModule
    ],
})
export class DashBoardModule {
}