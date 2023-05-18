import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login';
import { RegisterComponent } from './Register/Register';
import { FormsModule } from '@angular/forms';
import { NonAuthGuard } from 'src/app/Core/Auth/NonAuthGuard';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ResetPassComponent } from './ResetPass/ResetPass';
import { ResetComponent } from './Reset/Reset';

const routes: Routes = [
    {
      path: 'auth',
      canActivate: [NonAuthGuard],
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'resetpass', component: ResetPassComponent},
        { path: 'reset', component:ResetComponent},
      ],
    }
];

@NgModule({
    declarations:[
      LoginComponent,
      RegisterComponent,
      ResetComponent,
      ResetPassComponent,
    ],
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }