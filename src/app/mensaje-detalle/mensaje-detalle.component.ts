import { MensajeService } from './../mensaje.service';
import { Mensaje } from './../mensaje';
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mensaje-detalle',
  templateUrl: './mensaje-detalle.component.html',
  styleUrls: ['./mensaje-detalle.component.css']
})
export class MensajeDetalleComponent implements OnInit {

  @Input() mensaje: Mensaje;
  @Input() esNuevo: boolean;

  editar: boolean;
  constructor(
    private route: ActivatedRoute,
    private mensajeService: MensajeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMensaje();
    this.editar = false;
  }

  getMensaje(): void {
    const id = +this.route.snapshot.paramMap.get('idMensaje');
    console.log(id);
    const idTema = +this.route.snapshot.paramMap.get('id');
    this.mensajeService.getMensaje(id)
        .subscribe(mensaje => this.mensaje = mensaje);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log(this.mensaje);
    this.mensajeService.updateMensaje(this.mensaje)
        .subscribe(() => this.goBack());
  }
  delete(): void {
    const id = +this.route.snapshot.paramMap.get('idMensaje');
    console.log(id);
    this.mensajeService.deleteMensaje(id)
        .subscribe(() => this.goBack());
  }
  editarMensaje(): void {
    this.editar = true;

  }

}