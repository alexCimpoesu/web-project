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
    this.message = 'Cargando';
    this.authService.login(this.usuario, this.password).subscribe(result => {
      if (result === true) {
          // login successful
          localStorage.setItem('usuario', this.usuario);
          this.router.navigate(['/home']);
      } else {
          // login failed
          this.router.navigate(['/login']);
      }
  }, () => alert('Usuario o contraseña incorrectos'));
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}