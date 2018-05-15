import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { AuthGuardService } from './../auth-guard.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  usuario: string;
  password: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.usuario, this.password).subscribe(result => {
      if (result === true) {
          console.log('tamo dentro');
          // login successful
          this.router.navigate(['/home']);
      } else {
          console.log('no funsiona');
          // login failed
          this.router.navigate(['/login']);
      }
  });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}