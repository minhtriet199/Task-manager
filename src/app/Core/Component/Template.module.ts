import { NgModule } from '@angular/core';
import { NavigationBarTemplate } from './Navigation/NavigationBarTemplate';
import { GridListTemplate } from './GridListTemplate/GridListTemplate';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Drawer } from './Drawer/Drawer';
import { FormsModule } from '@angular/forms';
import { PopUpTemplate } from './PopUp/PopUpTemplate';
@NgModule({
    declarations: [
        Drawer,
        NavigationBarTemplate,
        GridListTemplate,
        PopUpTemplate,
    ],
    imports:[
        FormsModule,
        MatIconModule,
        RouterModule,
        CommonModule,
    ],
    exports:[
        Drawer,
        NavigationBarTemplate,
        GridListTemplate,
        PopUpTemplate,
    ],

})
export class TemplateModule { }
