import { FiltroUsuariosPipe } from './../filtro-usuarios.pipe';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {  usuarios: Usuario[];
  usuariosGuardados: Usuario[];
  num: number;
  inicio: number;
  fin: number;
  esFin: boolean;
  esInicio: boolean;
  nombreFiltro: string;
  nombreFiltroAnterior: string;
  numUsuarios: number;
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
    this.inicio = 0;
    this.fin = 10;
    this.esFin = false;
    this.esInicio = true;
    this.nombreFiltro = '';
    
  }
  getLastId(){
    if (this.usuarios.length > 10) {
    this.num = this.usuarios.length;
    this.num = this.usuarios[this.num - 1].id;
    this.num = this.num + 1;
    }
  }
  getUsuarios(): void {
    this.usuarioService.getUsuarios()
        .subscribe(usuarios => this.usuarios = usuarios, (error: any) => 'hola', () => this.getLastId());
  }
  retrocederDiez(){
    this.esFin = false;
    this.inicio -= 10;
    this.fin -= 10;
    if (this.inicio === 0){
        this.esInicio = true;
    }
  }
  avanzarDiez(){
    this.esInicio = false;
    this.inicio += 10;
    this.fin += 10;
    if (this.fin >= this.usuarios.length){
      this.esFin = true;
    }
  }
  borrarFiltro(){
    this.esFin = false;
    this.esInicio = true;
    this.inicio = 0; 
    this.fin = 10;
    this.nombreFiltro = '';
  }
  comprobarFiltro(){
    if (this.nombreFiltro !== '') {
      this.inicio = 0; 
      console.log(this.nombreFiltro);
      this.fin = this.usuarios.length;
      console.log(this.fin);
    }
    else {
      this.borrarFiltro();
    }
  }

}
