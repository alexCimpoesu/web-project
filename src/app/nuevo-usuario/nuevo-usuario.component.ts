import { Location } from '@angular/common';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  usuario = new Usuario();
  permisos: boolean;
  constructor(
    private usuarioService: UsuariosService,
    private location: Location) { }

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }
  add(): void {
    if (this.permisos === true) {
      this.usuario.permisos = 1;
    }
    else 
      this.usuario.permisos = 0;  
    if (this.usuario.c_password === this.usuario.password){
      this.usuarioService.addUsuario(this.usuario)
          .subscribe(() => this.goBack()

        );
      }
    else {
      alert('Las contraseñas no son iguales');
    }

  }
}
