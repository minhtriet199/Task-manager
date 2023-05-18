import { NgModule } from '@angular/core';
import { NavigationBarTemplate } from './Navigation/NavigationBarTemplate';
import { GridListTemplate } from './GridListTemplate/GridListTemplate';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SideBarTemplate } from './SideBar/SideBarTemplate';

@NgModule({
    declarations: [
        SideBarTemplate,
        NavigationBarTemplate,
        GridListTemplate,
    ],
    imports:[
        MatIconModule,
        RouterModule,
        BrowserModule,
        CommonModule,
    ],
    exports:[
        SideBarTemplate,
        NavigationBarTemplate,
        GridListTemplate,
    ],

})
export class TemplateModule { }
