import { NgModule } from '@angular/core';
import { NavigationBarTemplate } from './NavigationBar/NavigationBarTemplate';
import { GridListTemplate } from './GridListTemplate/GridListTemplate';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavigationBarTemplate,
        GridListTemplate,
    ],
    imports:[
        RouterModule,
        BrowserModule,
        CommonModule,
    ],
    exports:[
        NavigationBarTemplate,
        GridListTemplate,
    ],

})
export class TemplateModule { }
