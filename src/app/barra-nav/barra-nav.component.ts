import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {
  esAdmin: boolean;
  ruta: string;
  usuario: string;


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('permisos') === '1') {
      this.esAdmin = true;
    }
    else {
      this.esAdmin = false;
    }
    this.usuario = localStorage.getItem('usuario');

  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  cambioEstado(){
       this.ruta = this.router.url;
  }


}
