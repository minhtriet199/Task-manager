import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login';
import { RegisterComponent } from './Register/Register';
import { FormsModule } from '@angular/forms';
import { NonAuthGuard } from 'src/app/Core/Auth/NonAuthGuard';

const routes: Routes = [
    {
        path: 'auth',
        canActivate: [NonAuthGuard],
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
        ],
    }
];

@NgModule({
    declarations:[
      LoginComponent
    ],
  imports: [
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }