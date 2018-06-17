import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  @Input() usuario: Usuario;
  @Input() esNuevo: boolean;
  editar: boolean;
  permisos: boolean;
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUsuario();
    this.editar = false;
  }

  getUsuario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(id)
        .subscribe(usuario => this.usuario = usuario);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.permisos === true) {
      this.usuario.permisos = 1;
    }
    else
      this.usuario.permisos = 0;
    this.usuarioService.updateUsuario(this.usuario)
        .subscribe(() => this.goBack());
  }
  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.deleteUsuario(id)
        .subscribe(() => this.goBack());
  }
  editarUsuario(): void {
    if (this.usuario.permisos == 1) {
      this.permisos = true;
    }
    else 
      this.permisos = false;
    this.editar = true;
    
  }
}
