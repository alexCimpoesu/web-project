import { CONCESIONARIOS } from './../mock-concesionarios';
import { Concesionario } from './../concesionario';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-concesionarios',
  templateUrl: './concesionarios.component.html',
  styleUrls: ['./concesionarios.component.css']
})
export class ConcesionariosComponent implements OnInit {
  concesionarios = CONCESIONARIOS;
  concesionarioSeleccionado: Concesionario;
  constructor() { }

  ngOnInit() {
  }

  onSelect(concesionario: Concesionario): void {
    this.concesionarioSeleccionado = concesionario;
  }
}
