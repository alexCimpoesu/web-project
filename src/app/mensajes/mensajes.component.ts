import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MensajeService } from './../mensaje.service';
import { Mensaje } from './../mensaje';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  mensajes: Mensaje[];
  mensajesGuardados: Mensaje[];
  mensajeNuevo: Mensaje;
  num: number;
  inicio: number;
  fin: number;
  esFin: boolean;
  esInicio: boolean;
  nombreFiltro: string;
  nombreFiltroAnterior: string;
  usuario: string;
  id: number;
  esAdmin: boolean;
  constructor(private mensajeService: MensajeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getMensajes();
    this.inicio = 0;
    this.fin = 10;
    this.esFin = false;
    this.esInicio = true;
    this.nombreFiltro = '';
    this.usuario = localStorage.getItem('usuario');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.mensajeNuevo = new Mensaje();
    if (localStorage.getItem('permisos') === '1') {
      this.esAdmin = true;
    }
    else {
      this.esAdmin = false;
    }
  }
  getLastId() {
    this.num = this.mensajes.length;
    this.num = this.mensajes[this.num - 1].id;
    this.num = this.num + 1;
  }
  getMensajes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mensajeService.getMensajes(id)
      .subscribe(mensajes => this.mensajes = mensajes, (error: any) => 'hola', () => this.getLastId());
  }
  retrocederDiez() {
    this.esFin = false;
    this.inicio -= 10;
    this.fin -= 10;
    if (this.inicio === 0) {
      this.esInicio = true;
    }
  }
  goBack(): void {
    this.location.back();
  }
  avanzarDiez() {
    this.esInicio = false;
    this.inicio += 10;
    this.fin += 10;
    if (this.fin >= this.mensajes.length) {
      this.esFin = true;
    }
  }
  borrarFiltro() {
    this.nombreFiltro = '';
  }
  add(): void {

    this.mensajeService.addMensaje(this.mensajeNuevo, this.id)
      .subscribe(() =>    this.getMensajes());

    this.mensajeNuevo.cuerpo = '';
  }
}
