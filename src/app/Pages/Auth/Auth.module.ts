import { NgModule } from '@angular/core';
import { TemplateModule } from 'src/app/Core/Component/Template.module';
import { AuthRoutingModule } from './Auth-route.module';

@NgModule({
    imports: [
        TemplateModule,
        AuthRoutingModule
    ],
})
export class AuthModule {
}