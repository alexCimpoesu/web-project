import { LoginComponent } from './../login/login.component';
import { AuthGuardService } from './../auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthService } from '../auth.service';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
    AuthService
  ]
})
export class LoginRoutingModule {}