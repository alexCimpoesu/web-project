import { Concesionario } from './../concesionario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-concesionario-detalle',
  templateUrl: './concesionario-detalle.component.html',
  styleUrls: ['./concesionario-detalle.component.css']
})
export class ConcesionarioDetalleComponent implements OnInit {
  @Input() concesionario: Concesionario;
  constructor() { }

  ngOnInit() {
  }

}
